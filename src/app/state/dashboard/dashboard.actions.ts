import { createAction, props } from '@ngrx/store';

/* General */
export const init = createAction('[Dashboard] Initialise');

/* Dashboard */
export const fetchDashboardData = createAction('[Dashboard] Page data');
export const fetchDashboardDataSuccess = createAction('[Dashboard] Page data fetched succesfully', props<any>());
export const fetchDashboardDataError = createAction('[Dashboard] Failed to fetch Dashboard data', props<any>());

