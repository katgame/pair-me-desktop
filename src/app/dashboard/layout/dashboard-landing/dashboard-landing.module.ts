import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule, InputSearchModule } from '@mtn-components/vivid';

import { CommonModule } from '@angular/common';
import { FeatureStorefrontModule } from '@mtn/feature/storefront';
import { NgModule } from '@angular/core';
import { dashboardLandingComponent } from './dashboard-landing.component';
import { dashboardLandingRoutingModule } from './dashboard-landing-routing.module';
import { dashboardModule } from '@mtn-components/dashboard';

@NgModule({
  declarations: [dashboardLandingComponent],
  imports: [ReactiveFormsModule, CommonModule, dashboardModule, IconModule, InputSearchModule, dashboardLandingRoutingModule, FormsModule, FeatureStorefrontModule],
})
export class dashboardLandingModule {}
