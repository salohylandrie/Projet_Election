import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Electionpr } from './electionpr';

@Injectable({
  providedIn: 'root'
})
export class ElectionprService {
  baseUrl= "http://localhost/ProjetElection/php/Election";
  constructor(private  httpClient: HttpClient) { }

  readElecteur():Observable<Electionpr[]>{
    return this. httpClient.get<Electionpr[]>(`${this.baseUrl}/election_listphp.php`);
  }


  createElecteur(electeur: Electionpr): Observable<Electionpr>{
		return this.httpClient.post<Electionpr>(`${this.baseUrl}/election_createphp.php`, electeur);
	}

  updateElecteur(code_Elec: string, electeur: Electionpr): Observable<Electionpr> {
    return this.httpClient.put<Electionpr>(`${this.baseUrl}/election_updatephp.php?code_Elec=${code_Elec}`, electeur);
  }
  getElecteurById(code_Elec: string): Observable<Electionpr> {
    const url = `${this.baseUrl}/election_getphp.php?code_Elec=${code_Elec}`; 
    return this.httpClient.get<Electionpr>(url);
    
    }


    deleteElecteur(code_Elec: string) {
      return this.httpClient.delete<void>(`${this.baseUrl}/election_deletephp.php?code_Elec=${code_Elec}`);
    }

    searchElecteur(searchTerm: string): Observable<Electionpr[]> {
      const url = `${this.baseUrl}/election_search.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Electionpr[]>(url);
    }

    getElecteurDetails(code_Elec: string): Observable<Electionpr> {
      const url = `${this.baseUrl}/election-details-details.php?code_Elec=${code_Elec}`;
      return this.httpClient.get<Electionpr>(url);
    }
}
