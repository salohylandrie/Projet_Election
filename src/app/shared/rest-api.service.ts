import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './election';
import {Observable, throwError} from 'rxjs';
import {retry,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl='http:/localhost:3000';
  constructor(private http:HttpClient) { }

  httpOptions= {
    headers:new HttpHeaders({
      'content-type':'application/json',
    }),
  };

  getEmployees():Observable<Employee>{
    return this.http
    .get<Employee>(this.apiUrl +'/employees' )
    .pipe(retry(1), catchError(this.handleError));
  }

  getEmployee(id: any):Observable<Employee>{
    return this.http
    .get<Employee>(this.apiUrl + '/employees/' + id)
    .pipe(retry(1), catchError(this.handleError));
  }
  createEmployee(employee: any): Observable<Employee> {
    return this.http
      .post<Employee>(
        this.apiUrl + '/employees',
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

updateEmploye(id: any, employee: any):Observable<Employee>{
return this.http
.put<Employee>(
  this.apiUrl + '/employees/' + id,
  JSON.stringify(employee),
  this.httpOptions
)
.pipe(retry(1), catchError(this.handleError));
}

deleteEmploye(id: any){
  return this.http
  .delete<Employee>(this.apiUrl + '/employees/' + id , this.httpOptions)
  .pipe(retry(1) , catchError(this.handleError));
}

handleError(error: any){
let errorMessage='';
if(error.error instanceof ErrorEvent){
  errorMessage= error.error.message;
}
else{
  errorMessage= 'Error code: ${error.status}\nMessage: ${error.message}';
}
window.alert(errorMessage);
return throwError(() =>{
  return errorMessage;
});
}

}
