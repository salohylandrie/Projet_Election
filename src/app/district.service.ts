import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { District } from './district';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  baseUrl= "http://localhost/ProjetElection/php/District";
  constructor(private  httpClient: HttpClient) { }

  readDistrict():Observable<District[]>{
    return this. httpClient.get<District[]>(`${this.baseUrl}/district_listphp.php`);
  }
  
  createDistrict(district: District): Observable<District>{
		return this.httpClient.post<District>(`${this.baseUrl}/district_createphp.php`, district);
	}

  updateDistrict(code_Distr: string, district: District): Observable<District> {
    return this.httpClient.put<District>(`${this.baseUrl}/district_updatephp.php?code_Distr=${code_Distr}`, district);
  }
  getDistrictById(code_Distr: string): Observable<District> {
    const url = `${this.baseUrl}/district_detailsphp.php?code_Distr=${code_Distr}`; 
    return this.httpClient.get<District>(url);
    
    }


   
    searchDistrict(searchTerm: string): Observable<District[]> {
      const url = `${this.baseUrl}/district_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<District[]>(url);
    }

    getDistrictDetails(code_Distr: string): Observable<District> {
      const url = `${this.baseUrl}/district_detailsphp.php?code_Distr=${code_Distr}`;
      return this.httpClient.get<District>(url);
    }
}
