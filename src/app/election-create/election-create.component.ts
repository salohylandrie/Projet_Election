import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employe-create',
  templateUrl: './election-create.component.html',
  styleUrls: ['./election-create.component.css'],
})
export class EmployeCreateComponent implements OnInit{
 @Input()  employeDetail={name:'', email:'' ,phone: 0};
 constructor(public restApi: RestApiService , public router: Router){}
 ngOnInit(){}
 addEmploye(dataEmploye: any){
  this.restApi.createEmployee(this.employeDetail).subscribe((data:{})=>{
    this.router.navigate(['/employe-list']);
  });
 }
}
