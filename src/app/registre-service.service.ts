import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class RegistreServiceService {

  baseUrl= "http://localhost/ProjetElection/php/registre";
  constructor(private  httpClient: HttpClient) { }

  readUser():Observable<Users[]>{
    return this. httpClient.get<Users[]>(`${this.baseUrl}/registre_listphp.php`);
  }


  createUser(users: Users): Observable<Users>{
		return this.httpClient.post<Users>(`${this.baseUrl}/registre_createphp.php`, users);
	}

  updateUser(id: number, users: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${this.baseUrl}/registre_updatephp.php?id=${id}`, users);
  }
  getUserById(id: number): Observable<Users> {
    const url = `${this.baseUrl}/get_registrephp.php?id=${id}`; 
    return this.httpClient.get<Users>(url);
    
    }


    deleteUser(id: number) {
      return this.httpClient.delete<void>(`${this.baseUrl}/registre_deletephp.php?id=${id}`);
    }

    searchUser(searchTerm: string): Observable<Users[]> {
      const url = `${this.baseUrl}/registre_search.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Users[]>(url);
    }

    getUserDetails(id: number): Observable<Users> {
      const url = `${this.baseUrl}/registre_detailsphp.php?id=${id}`;
      return this.httpClient.get<Users>(url);
    }

    
}
