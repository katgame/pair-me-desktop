import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { PairmeService } from 'src/common/services/pairme-api';
import { actions } from '.';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
    constructor(private actions$: Actions, private pairmeAPI: PairmeService) { }

    fetchDashboardPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchDashboardData),
      mergeMap(() => {
        return this.pairmeAPI.getCategories<[any]>('dashboard').pipe(
          map((res) => actions.fetchDashboardDataSuccess(res[0])),
          catchError((error) => of(actions.fetchDashboardDataError(error)))
        );
      })
    )
  );

}