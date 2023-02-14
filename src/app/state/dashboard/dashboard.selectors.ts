import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboardPageData } from './../../../common/interfaces/DashboardPageData';
import { DashboardState } from 'src/app/types/dashboard-state.interface';

const getDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const dashboardData = createSelector(getDashboardState, (state: DashboardState) => state.dashboardData);
export const landingPageData = createSelector(getDashboardState, (state: DashboardState) => state.landingPageData);
export const categoryPageData = createSelector(getDashboardState, (state: DashboardState) => state.categoryPageData);
export const contentPageData = createSelector(getDashboardState, (state: DashboardState) => state.contentPageData);
export const loading = createSelector(getDashboardState, (state: DashboardState) => state.loading);