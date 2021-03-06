import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeservice : EmployeeServiceService) { }

  ngOnInit() {
    this._employeeservice.getEmployee().subscribe(data => this.employees = data);
  }

}
