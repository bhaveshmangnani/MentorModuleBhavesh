import {  Component, OnInit,  } from '@angular/core';
import { Router, } from '@angular/router';
import {Employee} from '../employee';
import {EmployeeViewService} from '../services/employee-view.service'; 

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  maxDate = new Date();
  emp = new Employee('', '', '', '', '', new Date());
  designation = ['Tester', 'Developer'];
  genders = ['Male', 'Female']

  constructor(public router: Router, public empService: EmployeeViewService) { }
  ngOnInit(): void {}

  add_emp()
  {
    this.empService.addEmp(this.emp);
    this.router.navigate(['/directory']);
  }

}
