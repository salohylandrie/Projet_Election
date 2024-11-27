import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultatCand } from './resultat-cand';

@Injectable({
  providedIn: 'root'
})
export class ResultatParBVService {

  baseUrl= "http://localhost/ProjetElection/php/ResultatParBureau";
  constructor(private  httpClient: HttpClient) { }

  getResultatParCodeListeCand():Observable<ResultatCand[]>{
    return this. httpClient.get<ResultatCand[]>(`${this.baseUrl}/ResultatParBureau_listphp.php`);
  }


    searchResultat(searchTerm: string): Observable<ResultatCand[]> {
      const url = `${this.baseUrl}/ResultatParBureau_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<ResultatCand[]>(url);
    }


}
