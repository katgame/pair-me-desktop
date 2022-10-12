import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboardPageData } from './../../../common/interfaces/DashboardPageData';
import { DashboardState } from 'src/app/types/dashboard-state.interface';

const getDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const dashboardData = createSelector(getDashboardState, (state: DashboardState) => state.dashboardData);
