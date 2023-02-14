import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { dashboardCategoryComponent } from './dashboard-category.component';

const routes: Routes = [{ path: ':category', component: dashboardCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardCategoryRoutingModule {}
