import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { dashboardHelpSearchComponent } from './dashboard-help-search.component';

const routes: Routes = [{ path: '', component: dashboardHelpSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardHelpSearchRoutingModule { }
