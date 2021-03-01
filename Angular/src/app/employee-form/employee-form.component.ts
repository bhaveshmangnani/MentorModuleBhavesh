import {  Component, OnInit,  } from '@angular/core';
import { Router, } from '@angular/router';
//import {EmployeeDirectory} from '../employee-directory/employee-directory.component';
import {Employee} from '../employee';
import {EmployeeViewService} from '../employee-view.service'; 

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  

  bsValue = new Date();
  maxDate = new Date();
  minDate = new Date();

  eid = '';
  ename = '';
  team = '';
  designation = ['Tester', 'Developer'];
  fdes = '';
  genders = ['Male', 'Female']
  gender = '';
  doj = '';

  constructor(public router: Router, public empService: EmployeeViewService) { }

  ngOnInit(): void {
    
  }

  add_emp()
  {
    //alert( this.eid+this.ename+this.team + this.fdes+this.gender+this.doj);
    //alert(this.doj.getDay());
    //alert(typeof(dt.getFullYear()));
    
    var dt = new Date(this.doj);
    
    var d = dt.getDate().toString();
    var m = dt.getMonth().toString();
    var y = dt.getFullYear().toString();
    var emp = new Employee(this.eid, this.ename, this.team, this.fdes, this.gender, d+'/'+m+'/'+y);
    this.empService.addEmp(emp);
    
    this.router.navigate(['/directory']);
    
  }

}
