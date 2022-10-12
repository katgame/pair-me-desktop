import { ActionReducer, StoreModule } from '@ngrx/store';
import { DashboardEffects, DashboardReducer } from './state/dashboard';

import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
     StoreModule.forRoot({ dashboard: DashboardReducer }),
     EffectsModule.forRoot([ DashboardEffects]),
     StoreDevtoolsModule.instrument(),
  ],
  exports: [],
})
export class AppStateModule { }
