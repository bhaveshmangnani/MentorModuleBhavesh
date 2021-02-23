import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'employeelist', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
