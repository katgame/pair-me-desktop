import { Component, ElementRef, OnDestroy, TrackByFunction, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { actions as dashboardActions, selectors as dashboardSelectors } from '../../../state/dashboard';
import { filter, tap } from 'rxjs/operators';

import { DashBoardCategories } from 'src/app/types/dashboard.interface';
import { Store } from '@ngrx/store';

const MAX_TOPICS_MOBILE = 3;
const MAX_TOPICS_TABLET = 8;
const MAX_TOPICS_DESKTOP = 8;
@Component({
  selector: 'mtn-dashboard-page',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0, transform: 'translateX(-20px)' }), animate('200ms ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' }))]),
    ]),
  ],
})
//const searchCategory = 'dashboard-conditions';
export class dashboardLandingComponent implements OnDestroy {
  @ViewChild('search') public searchElement!: ElementRef<HTMLInputElement>;
  public landingPageData$ = this.store.select(dashboardSelectors.landingPageData).pipe(filter((a) => !!a));
  showExpandButton = false;
  public searchResults$ = this.store.select(dashboardSelectors.searchResults).pipe(
    tap((results) => {
      if (results) {
        //results.results = results.results.splice(0, 5);
      }
      return results;
    })
  );

  // The text contained in the search bar
  public searchText = '';
  public isExpanded = false;
  public showSpinner = true;
  // The maximum number of topics allowed on the page
  public maxTopics = 8;
  constructor(private store: Store<any>) {
    this.store.dispatch(dashboardActions.fetchLandingData());
    this.initialiseMediaQueries();
    const pageName = 'dashboard-and-conditions';
    this.store.dispatch(commonActions.fetchMetaData({ pageName }));
    window.localStorage.removeItem('currentPage');
  }

  public ngOnDestroy() {
    // This is a hack and should be moved to Vivid as soon as possible
    document.body.classList.remove('mtn-modal-open');
  }
  private initialiseMediaQueries() {
    // Create the query list.
    const mqDesktop = window.matchMedia('(min-width: 992px)');
    const mqTablet = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
    const mqMobile = window.matchMedia('(max-width: 576px)');

    // Call each function once
    this.updateMaxTopics(mqDesktop.matches, MAX_TOPICS_DESKTOP);
    this.updateMaxTopics(mqTablet.matches, MAX_TOPICS_TABLET);


    // Add the callback function as a listener to the query list.
    mqDesktop.addEventListener('change', (e) => this.updateMaxTopics(e.matches, MAX_TOPICS_DESKTOP));
    mqTablet.addEventListener('change', (e) => this.updateMaxTopics(e.matches, MAX_TOPICS_TABLET));
    mqMobile.addEventListener('change', (e) => this.updateMaxTopics(e.matches, MAX_TOPICS_MOBILE));
  }

  private updateMaxTopics(matches: boolean, maxTopics: number) {
    if (matches) {
      this.maxTopics = maxTopics;
      if (maxTopics !== 8) { this.showExpandButton = true; }

    } else {
      this.showExpandButton = false;
    }
  }
  // Perform view-related actions when search text is changed
  public onChange(searchText: string) {
    this.searchText = searchText;

    if (!searchText && this.searchElement) {
      this.searchElement.nativeElement.focus();
      // this.searchText = ' ';
    }
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

  public topicName: TrackByFunction<DashBoardCategories> = (_, t) => t.topic;

  public title: TrackByFunction<{ title: string }> = (_, t) => t.title;
}
