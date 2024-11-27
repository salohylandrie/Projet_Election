




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bureau } from './bureau';

@Injectable({
  providedIn: 'root'
})
export class BureauServiceService {

  private baseUrl = 'http://localhost/ProjetElection/php/bureau_vote';

  constructor(private httpClient: HttpClient) { }

  getBureaux(): Observable<Bureau[]> {
    return this.httpClient.get<Bureau[]>(`${this.baseUrl}/bureau_listphp.php`);
  }

  createBureau(bureau: Bureau): Observable<Bureau> {
    return this.httpClient.post<Bureau>(`${this.baseUrl}/bureau_createphp.php`, bureau);
  }

  updateBureau(idBV: number, bureau: Bureau): Observable<Bureau> {
    return this.httpClient.put<Bureau>(`${this.baseUrl}/bureau_updatephp.php?idBV=${idBV}`, bureau);
  }

  getBureauById(idBV: number): Observable<Bureau> {
    return this.httpClient.get<Bureau>(`${this.baseUrl}/bureau_detailsphp.php?idBV=${idBV}`);
  }

  deleteBureau(idBV: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/bureau_deletephp.php?idBV=${idBV}`);
  }

  searchBureaux(searchTerm: string): Observable<Bureau[]> {
    return this.httpClient.get<Bureau[]>(`${this.baseUrl}/bureau_searchphp.php?searchTerm=${searchTerm}`);
  }


  
  getBureauDetails(idBV: number): Observable<Bureau> {
    const url = `${this.baseUrl}/bureau_detailsphp.php?idBV=${idBV}`;
    return this.httpClient.get<Bureau>(url);
  }
}
