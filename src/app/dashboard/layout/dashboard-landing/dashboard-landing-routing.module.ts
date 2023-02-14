import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { dashboardLandingComponent } from './dashboard-landing.component';

const routes: Routes = [{ path: '', component: dashboardLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardLandingRoutingModule {}
