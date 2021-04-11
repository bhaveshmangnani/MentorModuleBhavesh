import { Injectable } from '@angular/core';
import {Employee} from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeViewService {

  constructor() { }

  private employees: Employee[] = [];
  
  public addEmp( emp: Employee): void
  {
    this.employees.push(emp);
  }

  public getEmployees(): Employee[]
  {
    return this.employees;
  }

}
