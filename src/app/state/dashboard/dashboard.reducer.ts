import { Action, createReducer, on } from '@ngrx/store';

import { DashboardState } from './../../types/dashboard-state.interface';
import { actions } from '.';

const reducer = createReducer(
    {} as DashboardState, // Initial state is empty

    on(actions.fetchDashboardDataSuccess, (state, payload) => ({ ...state, dashboardData: payload })),
);

// export function getData()
export function DashboardReducer(state: DashboardState | undefined, action: Action): DashboardState {
    return reducer(state, action);
}

