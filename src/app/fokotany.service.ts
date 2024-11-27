import { Injectable } from '@angular/core';
import { Fokotany } from './fokotany';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FokotanyService {

  baseUrl= "http://localhost/ProjetElection/php/Fokotany";
  constructor(private  httpClient: HttpClient) { }

  readFokotany():Observable<Fokotany[]>{
    return this. httpClient.get<Fokotany[]>(`${this.baseUrl}/fokotany_listphp.php`);
  }
  
createFokotany(commune: Fokotany): Observable<Fokotany>{
		return this.httpClient.post<Fokotany>(`${this.baseUrl}/fokotany_createphp.php`, commune);
	}

  updateFokotany(code_Comm: string, commune: Fokotany): Observable<Fokotany> {
    return this.httpClient.put<Fokotany>(`${this.baseUrl}/fokotany_updatephp.php?code_Comm=${code_Comm}`, commune);
  }
  getFokotanyById(code_Comm: string): Observable<Fokotany> {
    const url = `${this.baseUrl}/fokotany_detailsphp.php?code_Comm=${code_Comm}`; 
    return this.httpClient.get<Fokotany>(url);
    
    }


   
    searchFokotany(searchTerm: string): Observable<Fokotany[]> {
      const url = `${this.baseUrl}/fokotany_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Fokotany[]>(url);
    }

    getFokotanyDetails(code_Comm: string): Observable<Fokotany> {
      const url = `${this.baseUrl}/fokotany_detailsphp.php?code_Comm=${code_Comm}`;
      return this.httpClient.get<Fokotany>(url);
    }
}
