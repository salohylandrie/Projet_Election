import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Electeur } from './electeur';



@Injectable({
  providedIn: 'root'
})
export class ElecteurServiceService {
  baseUrl= "http://localhost/ProjetElection/php/candidat";
  constructor(private  httpClient: HttpClient) { }

  readElecteur():Observable<Electeur[]>{
    return this. httpClient.get<Electeur[]>(`${this.baseUrl}/electeur_listphp.php`);
  }


  createElecteur(electeur: Electeur): Observable<Electeur>{
		return this.httpClient.post<Electeur>(`${this.baseUrl}/electeur_createphp.php`, electeur);
	}

  updateElecteur(idcand: number, electeur: Electeur): Observable<Electeur> {
    return this.httpClient.put<Electeur>(`${this.baseUrl}/electeur_updatephp.php?idcand=${idcand}`, electeur);
  }
  getElecteurById(idcand: number): Observable<Electeur> {
    const url = `${this.baseUrl}/electeur_getphp.php?idcand=${idcand}`; 
    return this.httpClient.get<Electeur>(url);
    
    }


    deleteElecteur(idcand: number) {
      return this.httpClient.delete<void>(`${this.baseUrl}/electeur_deletephp.php?idcand=${idcand}`);
    }

    searchElecteur(searchTerm: string): Observable<Electeur[]> {
      const url = `${this.baseUrl}/electeur_search.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Electeur[]>(url);
    }

    getElecteurDetails(idcand: number): Observable<Electeur> {
      const url = `${this.baseUrl}/electeur-details.php?idcand=${idcand}`;
      return this.httpClient.get<Electeur>(url);
    }

    getNomsCandidats(code_ListeCand: string): Observable<string[]> {
      const url = `${this.baseUrl}/get-noms-candidats.php?code_ListeCand=${code_ListeCand}`;
      return this.httpClient.get<string[]>(url);
    }
}


