import { CategoryCardComponent } from "src/common/cards/category-card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        DashboardComponent,
        CategoryCardComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        DashboardComponent,
        CategoryCardComponent

    ],
})
export class DashboardBlocksModule { }
