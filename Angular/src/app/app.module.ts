import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { EmployeeDirectory } from './employee-directory/employee-directory.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
//import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule, BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    EmployeeDirectory,
    EmployeeFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    CarouselModule,
    CollapseModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
