import { IconModule, InputSearchModule } from '@mtn-components/vivid';

import { CommonModule } from '@angular/common';
import { FeatureStorefrontModule } from '@mtn/feature/storefront';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { dashboardContentComponent } from './dashboard-content.component';
import { dashboardContentRoutingModule } from './dashboard-content-routing.module';
import { dashboardModule } from '@mtn-components/dashboard';

@NgModule({
  declarations: [dashboardContentComponent],
  imports: [CommonModule, dashboardModule, IconModule, InputSearchModule, dashboardContentRoutingModule, FormsModule, FeatureStorefrontModule],
})
export class dashboardContentModule {}
