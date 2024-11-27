import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listecandidat } from './listecandidat';

@Injectable({
  providedIn: 'root'
})
export class ListeCandidatService {

  baseUrl= "http://localhost/ProjetElection/php/Liste_candidat";
  constructor(private  httpClient: HttpClient) { }

  readRegion():Observable<Listecandidat[]>{
    return this. httpClient.get<Listecandidat[]>(`${this.baseUrl}/listecand_listphp.php`);
  }
  
  

  createRegion(listecandidat: Listecandidat): Observable<Listecandidat>{
		return this.httpClient.post<Listecandidat>(`${this.baseUrl}/listecand_createphp.php`, listecandidat);
	}
  updateRegion(code_ListeCand: string, listecandidat: Listecandidat): Observable<Listecandidat> {
    return this.httpClient.put<Listecandidat>(`${this.baseUrl}/listecand_updatephp.php?code_ListeCand=${code_ListeCand}`, listecandidat);
  }
  getregionById(code_ListeCand: string): Observable<Listecandidat> {
    const url = `${this.baseUrl}/listecand_getphp.php?code_ListeCand=${code_ListeCand}`; 
    return this.httpClient.get<Listecandidat>(url);
    
    }


    deleteRegion(code_ListeCand: string) {
      return this.httpClient.delete<void>(`${this.baseUrl}/listecand_deletephp.php?code_ListeCand=${code_ListeCand}`);
    }

    searchRegion(searchTerm: string): Observable<Listecandidat[]> {
      const url = `${this.baseUrl}/listecand_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Listecandidat[]>(url);
    }

    getregionDetails(code_ListeCand: string): Observable<Listecandidat> {
      const url = `${this.baseUrl}/region_detailsphp.php?code_ListeCand=${code_ListeCand}`;
      return this.httpClient.get<Listecandidat>(url);
    }
}
