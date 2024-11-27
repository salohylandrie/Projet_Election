import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.css']
})
export class EmployeListComponent implements OnInit {
 
  Employee: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadEmployees();
  }
  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmploye(id).subscribe((data) => {
        this.loadEmployees();
      });
    }
  }
  
}
