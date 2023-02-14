import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TrackByFunction, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { actions as dashboardActions, selectors as dashboardSelectors } from '../../../state/dashboard';
import { map, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { dashboardCategoryComponent } from '../dashboard-category/dashboard-category.component';

@Component({
  selector: 'mtn-dashboard-content-page',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0, transform: 'translateX(-20px)' }), animate('200ms ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' }))]),
    ]),
  ],
})
export class dashboardContentComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('search') public searchElement!: ElementRef<HTMLInputElement>;
  @ViewChild(dashboardCategoryComponent) categoryPage: any;
  categoryPageUrl = '';
  // @ViewChild(dashboardSearchResultsComponent) searchResultsComponent!: dashboardSearchResultsComponent;
  //public searchResults$ = this.store.select(helpSelectors.searchResults);

  public dashboardContent$!: Observable<any>;
  subscription: Subscription = new Subscription();
  public backLinkUrl = '#';
  public backLinkText = 'Back';
  public navLinks = [];
  public categoryBackLink = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    const pageName = 'dashboard-and-conditions';
    route.queryParams.pipe(map(({ s }) => s)).subscribe((searchText) => this.store.dispatch(dashboardActions.search({ searchText })));
  }

  public searchResults$ = this.store.select(dashboardSelectors.searchResults).pipe(
    tap((results) => {
      if (results) {
        //results.results = results.results.splice(0, 5);
      }
      return results;
    })
  );
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.dashboardContent$.forEach((subscription) => subscription.unsubscribe());
  }
  public ngAfterViewInit(): void {

    //debugger;
    // Update search text in component with value in params
    const params = this.route.snapshot.queryParamMap;
  }

  // The text contained in the search bar
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public searchText = '';

  public ngOnInit(): void {
    //this.dashboardContent$ = new Observable<any>;
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('content');

      if (slug) {
        this.store.dispatch(dashboardActions.fetchContentData({ slug }));
        this.dashboardContent$ = this.store.select(dashboardSelectors.contentPageData);
        this.dashboardContent$.subscribe((content) => {
          if (content) {
            if (content.category === 'Products and Services') {
              this.categoryBackLink = '../dashboard-and-conditions/category/productsand-services';
            } else {
              if (this.categoryPageUrl === 'all') {
                this.categoryBackLink = '../dashboard-and-conditions/category/all';
              } else {
                content.category = content.category.replace(/<[^>]*>/g, '');
                content.category = content.category.replace('&', 'and');
                let backlink = content.category.replace(' ', '-').toLowerCase();
                backlink = backlink.replace(' ', '-');
                this.categoryBackLink = '../dashboard-and-conditions/category/' + backlink;
              }
            }
            const data: MetaTags = {
              metatag: [],
              pageTitle: content.title + ' | dashboarddashboard & Conditions - dashboardSouth Africa',
              body: [{ value: '', format: '', summary: '' }],
            };
            data.metatag = content.meta;

            this.meta.refreshLinkAndScript();
            this.meta.generateMeta(data);
          }
        });
      } else {
        console.error('No content found in route');
      }
    });
  }

  // Perform view-related actions when search text is changed
  public onChange(searchText: any) {
    this.searchText = searchText;
    if (!searchText && this.searchElement) {
      this.searchElement.nativeElement.focus();
    }
  }
  public search(searchText: any) {
    // debugger;
    this.store.dispatch(dashboardActions.search({ searchText }));
  }
  // Search for help topics
  public onSearch(searchText: any) {
    this.router.navigate([], { queryParams: { s: searchText } });
  }

  public signUpNow(uri: string) {
    window.location.href = uri;
  }

  public topicName: TrackByFunction<HelpTopic> = (_, t) => t.topicName;

  public title: TrackByFunction<{ title: string }> = (_, t) => t.title;

  public getNavLinks(item: any) {
    let links = [];
    if (item.sections.length > 0) {
      for (const section of item.sections) {
        links.push({ name: section.title, url: '/content/' + item.slug, fragment: section.slug });
      }
    } else {
      links = [{ name: 'dashboard & Conditions', url: '/content/' + item.slug, fragment: 'dashboard-and-conditions' }];
    }

    return links;
  }

  onBack() {
  }
}
