import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule, InputSearchModule } from '@mtn-components/vivid';

import { CommonModule } from '@angular/common';
import { HelpSearchModule } from "@mtn/feature/help/search";
import { NgModule } from '@angular/core';
import { dashboardHelpSearchComponent } from './dashboard-help-search.component';
import { dashboardHelpSearchRoutingModule } from './dashboard-help-search-routing.module';

@NgModule({
  declarations: [dashboardHelpSearchComponent],
  imports: [CommonModule, dashboardHelpSearchRoutingModule, InputSearchModule, IconModule, FormsModule, ReactiveFormsModule, HelpSearchModule],
})
export class dashboardHelpSearchModule {}
