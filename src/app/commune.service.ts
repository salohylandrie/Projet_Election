import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commune } from './commune';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  baseUrl= "http://localhost/ProjetElection/php/Commune";
  constructor(private  httpClient: HttpClient) { }

  readCommune():Observable<Commune[]>{
    return this. httpClient.get<Commune[]>(`${this.baseUrl}/commune_listphp.php`);
  }
  
createCommune(commune: Commune): Observable<Commune>{
		return this.httpClient.post<Commune>(`${this.baseUrl}/commune_createphp.php`, commune);
	}

  updateCommune(code_Distr: string, commune: Commune): Observable<Commune> {
    return this.httpClient.put<Commune>(`${this.baseUrl}/commune_updatephp.php?code_Distr=${code_Distr}`, commune);
  }
  getCommuneById(code_Distr: string): Observable<Commune> {
    const url = `${this.baseUrl}/commune_detailsphp.php?code_Distr=${code_Distr}`; 
    return this.httpClient.get<Commune>(url);
    
    }


   
    searchCommune(searchTerm: string): Observable<Commune[]> {
      const url = `${this.baseUrl}/commune_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Commune[]>(url);
    }

    getCommuneDetails(code_Distr: string): Observable<Commune> {
      const url = `${this.baseUrl}/commune_detailsphp.php?code_Distr=${code_Distr}`;
      return this.httpClient.get<Commune>(url);
    }
}
