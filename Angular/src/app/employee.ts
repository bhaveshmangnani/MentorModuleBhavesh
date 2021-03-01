export class Employee {
    eid = '';
    ename = '';
    team = '';
    designation = '';
    gender = '';
    doj = '';

    constructor(eid: string, ename: string, team: string, designation: string, gender: string, doj: string){
        this.eid = eid;
        this.ename = ename;
        this.team = team;
        this.designation = designation;
        this.gender = gender;
        this.doj = doj;
    }
    
}
