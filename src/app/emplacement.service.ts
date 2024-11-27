import { Injectable } from '@angular/core';
import { Emplacement } from './emplacement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {

  baseUrl= "http://localhost/ProjetElection/php/Emplacement";
  constructor(private  httpClient: HttpClient) { }

  readUser():Observable<Emplacement[]>{
    return this. httpClient.get<Emplacement[]>(`${this.baseUrl}/emplacement_listphp.php`);
  }



  updateUser(id: number, users: Emplacement): Observable<Emplacement> {
    return this.httpClient.put<Emplacement>(`${this.baseUrl}/registre_updatephp.php?id=${id}`, users);
  }
  getUserById(id: number): Observable<Emplacement> {
    const url = `${this.baseUrl}/get_registrephp.php?id=${id}`; 
    return this.httpClient.get<Emplacement>(url);
    
    }



    searchEmplacement(searchTerm: string): Observable<Emplacement[]> {
      const url = `${this.baseUrl}/emplacement_search.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Emplacement[]>(url);
    }

}
