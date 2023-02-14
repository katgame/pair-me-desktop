import { IconModule, InputSearchModule } from '@mtn-components/vivid';

import { CommonModule } from '@angular/common';
import { FeatureStorefrontModule } from '@mtn/feature/storefront';
import { FormsModule } from '@angular/forms';
import { MtnCommonModule } from '@mtn-components/common';
import { NgModule } from '@angular/core';
import { dashboardCategoryComponent } from './dashboard-category.component';
import { dashboardCategoryRoutingModule } from './dashboard-category-routing.module';
import { dashboardModule } from '@mtn-components/dashboard';

@NgModule({
  declarations: [dashboardCategoryComponent],
  imports: [MtnCommonModule, CommonModule, dashboardModule, IconModule, InputSearchModule, dashboardCategoryRoutingModule, FormsModule, FeatureStorefrontModule],
})
export class dashboardCategoryModule {}
