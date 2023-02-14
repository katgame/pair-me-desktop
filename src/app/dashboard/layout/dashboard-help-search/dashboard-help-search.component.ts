import { ActivatedRoute, Router } from "@angular/router";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IconRegistryService, mtnIconIcSearch } from "@mtn-components/vivid";
import { actions as dashboardActions, selectors as dashboardSelectors } from "../../app/state";
import { map, tap } from "rxjs/operators";

import { SearchResultsComponent } from "@mtn/feature/help/search";
import { Store } from "@ngrx/store";
import { actions as commonActions } from "@mtn/data/common";

@Component({
  selector: 'mtn-help-search-page',
  templateUrl: './dashboard-help-search.component.html',
  styleUrls: ['./dashboard-help-search.component.scss'],
})
export class dashboardHelpSearchComponent implements AfterViewInit {

  @ViewChild(SearchResultsComponent) searchResultsComponent!: SearchResultsComponent;

  public searchResults$ = this.store.select(dashboardSelectors.searchResults).pipe(
    tap((results) => {
      if (results) {
        // results.results = results.results.splice(0, 5);
      }
      return results;
    })
  );

  constructor(icons: IconRegistryService, private router: Router, private route: ActivatedRoute, private store: Store) {
    const pageName = 'search-results';
    this.store.dispatch(commonActions.fetchMetaData({ pageName }));

    icons.registerIcons([mtnIconIcSearch]);

    // Search when query params change
    route.queryParams.pipe(map(({ s }) => s)).subscribe((searchText) => this.store.dispatch(dashboardActions.search({ searchText })));
  }

  public ngAfterViewInit(): void {
    // Update search text in component with value in params
    const params = this.route.snapshot.queryParamMap;

    if (params && params.has('s')) {
      this.searchResultsComponent.searchTextValue = params.get('s') || '';
    }
  }

  public onSearch(text: any) {
    // Update params when search control is updated
    this.router.navigate([], { queryParams: { s: text } });
  }

  public search(searchText: any) {
    this.store.dispatch(dashboardActions.search({ searchText }));
  }
}
