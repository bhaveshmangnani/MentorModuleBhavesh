import { Injectable } from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeViewService {

  constructor() { }

  private employees: Employee[] = [];
  
  public addEmp( emp: Employee)
  {
    this.employees.push(emp);
  }

  public getEmployees()
  {
    return this.employees;
  }

}
