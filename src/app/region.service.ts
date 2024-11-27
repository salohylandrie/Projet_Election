import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  baseUrl= "http://localhost/ProjetElection/php/Région";
  constructor(private  httpClient: HttpClient) { }

  readRegion():Observable<Region[]>{
    return this. httpClient.get<Region[]>(`${this.baseUrl}/region_listphp.php`);
  }
  
  

  createRegion(region: Region): Observable<Region>{
		return this.httpClient.post<Region>(`${this.baseUrl}/region_createphp.php`, region);
	}

  updateRegion(code_Reg: string, region: Region): Observable<Region> {
    return this.httpClient.put<Region>(`${this.baseUrl}/region_updatephp.php?code_Reg=${code_Reg}`, region);
  }
  getregionById(code_Reg: string): Observable<Region> {
    const url = `${this.baseUrl}/region_getphp.php?code_Reg=${code_Reg}`; 
    return this.httpClient.get<Region>(url);
    
    }
   


    deleteRegion(code_Reg: string) {
      return this.httpClient.delete<void>(`${this.baseUrl}/region_deletephp.php?code_Reg=${code_Reg}`);
    }

    searchRegion(searchTerm: string): Observable<Region[]> {
      const url = `${this.baseUrl}/region_searchphp.php?searchTerm=${searchTerm}`;
      return this.httpClient.get<Region[]>(url);
    }

    getregionDetails(code_Reg: string): Observable<Region> {
      const url = `${this.baseUrl}/region_detailsphp.php?code_Reg=${code_Reg}`;
      return this.httpClient.get<Region>(url);
    }
}
