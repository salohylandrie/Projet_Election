import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultatCand } from './resultat-cand';

@Injectable({
  providedIn: 'root'
})
export class ResultatCandService {

 
  baseUrl= "http://localhost/ProjetElection/php/RésultatBV";
  constructor(private  httpClient: HttpClient) { }

  readResultat():Observable<ResultatCand[]>{
    return this. httpClient.get<ResultatCand[]>(`${this.baseUrl}/résultatBV_listphp.php`);
  }


  updateElecteur(idres: number, electeur: ResultatCand): Observable<ResultatCand> {
    return this.httpClient.put<ResultatCand>(`${this.baseUrl}/election_updatephp.php?code_Elec=${idres}`, electeur);
  }
 

    createResultat(users: ResultatCand): Observable<ResultatCand>{
      return this.httpClient.post<ResultatCand>(`${this.baseUrl}/resultatBV_createphp.php`, users);
    }
    searchResultat(searchTerm: string): Observable<ResultatCand[]> {
      const url = `${this.baseUrl}/resultat_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<ResultatCand[]>(url);
    }


}
