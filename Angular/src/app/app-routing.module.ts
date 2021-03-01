import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDirectory } from './employee-directory/employee-directory.component';
import { LoginComponent } from './login/login.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AuthGuard } from './auth/auth.guard';

/*const routes: Routes = [

  //{path: '', component: AppComponent},

  {
    path: 'login',
    component: LoginComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path:'',
        children: [
          {path: 'directory', component: EmployeeDirectory},
          { path: 'add', component: EmployeeFormComponent },
        ]
      }
    ]
  }
  
];*/

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'directory', component: EmployeeDirectory, canActivate: [AuthGuard]},
  {path: 'add', component: EmployeeFormComponent, canActivate: [AuthGuard]}
];

const routes_test: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'directory', component: EmployeeDirectory },
  {path: 'add', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
