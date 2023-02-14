import { Component, ElementRef, Input, OnDestroy, OnInit, TrackByFunction, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { actions as dashboardActions, selectors as dashboardSelectors } from '../../../state/dashboard';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mtn-dashboard-category-page',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0, transform: 'translateX(-20px)' }), animate('200ms ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' }))]),
    ]),
  ],
})
export class dashboardCategoryComponent implements OnInit, OnDestroy {
  pageOfItems: any;
  currentPage: any;
  items: any;
  pageSize: any;
  initialPage: any;
  allItems: any;
  allCategory = false;
  subscription: Subscription = new Subscription();
  @ViewChild('search') public searchElement!: ElementRef<HTMLInputElement>;
  @Input() pageUrl!: string;
  public categoryContent$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
    this.store.dispatch(dashboardActions.reset());

    const pageName = 'dashboard-and-conditions';
    this.pageSize = 10;
    this.initialPage = 1;
    window.scroll(0, 0);
  }

  // dashboardSelectors.flatSearchResults
  public searchResults$ = this.store.select(dashboardSelectors.searchResults).pipe(
    tap((results) => {
      if (results) {
        //results.results = results.results.splice(0, 5);
      }
      return results;
    })
  );
  onChangePage(event: any) {
    if (event) {
      this.items = event;
      window.scroll(0, 0);
    }
  }

  setCurrentPage() {
    if (window.localStorage.getItem('currentPage') !== 'null') {
      this.initialPage = Number(window.localStorage.getItem('currentPage'));
    } else {
      this.initialPage = 1;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getCurrentPage(event: any) {
    if (event) {
      window.localStorage.setItem('currentPage', JSON.stringify(event));
      this.setCurrentPage();
    }
  }

  // The text contained in the search bar
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public searchText = '';

  public ngOnInit(): void {
    this.setCurrentPage();
    this.activatedRoute.paramMap.subscribe((params) => {
      const category = params.get('category');
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.data.changeUrl(category!);
      if (category) {
        this.store.dispatch(dashboardActions.fetchCategoryDataFiltered({ category }));
        this.categoryContent$ = this.store.select(dashboardSelectors.landingPageData);
        this.categoryContent$.subscribe((res) => {
          if (res) {
            if (res.category) {
              this.allItems = res.category.articles;
              this.items = this.allItems.slice(0, 10);
            }
          }
        });

        // This settimeout is sies, but necessary so that the content has loaded in before we start messing with the DOM
        this.categoryContent$.subscribe((content) => {
          if (content) {
            if (content.category) {
              const data: MetaTags = {
                metatag: [],
                pageTitle: content.category.topic + ' | dashboarddashboard & Conditions - dashboardSouth Africa',
                body: [{ value: '', format: '', summary: '' }],
              };
              data.metatag = content.meta;

              this.meta.refreshLinkAndScript();
              this.meta.generateMeta(data);
            }
          }
        });
      } else {
        console.error('No category found in route');
      }
    });
  }

  public formatTopic(topic: string) {
    if (topic) {
      return topic.replace(/<[^>]*>/g, '');
    }
    return '';
  }

  public ngOnDestroy() {
    // This is a hack and should be moved to Vivid as soon as possible
    document.body.classList.remove('mtn-modal-open');
  }

  // Perform view-related actions when search text is changed
  public onChange(searchText: string) {
    // eslint-disable-next-line no-debugger
    // debugger;
    this.searchText = searchText;

    if (!searchText && this.searchElement) {
      this.searchElement.nativeElement.focus();
    }
  }
  public search(searchText: string) {
    this.store.dispatch(dashboardActions.search({ searchText }));
  }

  // Search for help topics
  public onSearch(searchText: string) {
    if (searchText) {
      this.store.dispatch(dashboardActions.search({ searchText }));
    }
  }

  public signUpNow(uri: string) {
    window.location.href = uri;
  }

  public topicName: TrackByFunction<HelpTopic> = (_, t) => t.topicName;

  public title: TrackByFunction<{ title: string }> = (_, t) => t.title;
}
