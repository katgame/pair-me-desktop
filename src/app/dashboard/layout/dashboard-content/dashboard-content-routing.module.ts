import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { dashboardContentComponent } from './dashboard-content.component';

const routes: Routes = [{ path: ':content', component: dashboardContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardContentRoutingModule {}
