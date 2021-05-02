import { Component, OnInit, } from '@angular/core';
import {Employee} from '../employee' 
import {EmployeeViewService} from '../services/employee-view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css']
})
export class EmployeeDirectory implements OnInit {
  constructor(public router: Router, public empService: EmployeeViewService) { }

  ngOnInit(): void {}
  
  public employees: Employee[] =  this.empService.getEmployees();

  add(){
    this.router.navigate(['/add']);
  }

  // references
  //_ = this.employees.push(this.e1);
  //_1 = this.employees.push(this.e2);
  //private e1 =  new Employee('1', 'Bhavesh', 'Develop', 'Developer', 'Male', '10/03/2020');
  //private e2 = new Employee('2', 'Leo', 'abc', 'Developer', 'Male', '10/03/2020');

}
