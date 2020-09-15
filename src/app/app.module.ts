import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import {CommonModule} from "@angular/common"
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTablesModule } from 'angular-datatables';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {CookieService  } from 'ngx-cookie-service'; 
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';



// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { HttpClientModule } from '@angular/common/http';
import { CdrTableComponent } from './cdr-table/cdr-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { QPerformanceTableComponent } from './q-performance-table/q-performance-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    CdrTableComponent,
    QPerformanceTableComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
