import { animate, style, transition, trigger } from '@angular/animations';
import { actions as dashboardActions, selectors as dashboardSelectors } from '../../app/state/dashboard';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0, transform: 'translateX(-20px)' }), animate('200ms ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' }))]),
    ]),
  ],
})
export class DashboardComponent {
  title = 'dashboard';
  dataTest: any;
  public dashboardData$ = this.store.select(dashboardSelectors.dashboardData).pipe(filter((a) => !!a));

  constructor(private store: Store<any>) {
    this.store.dispatch(dashboardActions.fetchDashboardData());
  }
}
