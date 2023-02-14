import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStateModule } from './app-state.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardBlocksModule } from 'src/blocks/dashboard-module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStateModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [{ provide: 'ENVIRONMENT', useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
