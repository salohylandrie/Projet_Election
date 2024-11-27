import { Component,OnInit } from '@angular/core';
import { Fokotany } from '../fokotany';
import { Commune } from '../commune';
import { CommuneService } from '../commune.service';
import { FokotanyService } from '../fokotany.service';

@Component({
  selector: 'app-fokotany-list',
  templateUrl: './fokotany-list.component.html',
  styleUrls: ['./fokotany-list.component.css']
})
export class FokotanyListComponent implements OnInit {
  fokotanys: Fokotany[];
  communes: Commune[];
  status = false;
  searchTerm: string = '';
  searchResults: Fokotany[]=[];
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(
    private communeService: CommuneService,
    private fokotanyService: FokotanyService 
  ) {}

  ngOnInit() {
    this.fokotanyService.readFokotany().subscribe((fokotanys: Fokotany[]) => {
      this.fokotanys = fokotanys;
      this.loadCommuneNames();
      this.loadBureaus();
    });
  }

  private loadCommuneNames() {
    this.communeService.readCommune().subscribe((communes: Commune[]) => {
      this.communes = communes;
      this.mapCommuneNamesToCommunes();
    });
  }

  private mapCommuneNamesToCommunes() {
    for (const fokotany of this.fokotanys) {
      const commune = this.communes.find(commune => commune.code_Comm === fokotany.code_Comm);
      if (commune) {
        fokotany.nomComm = commune.nomComm;
      }
    }
  }

  searchBureau() {
    if (this.searchTerm.trim() !== '') {
      this.fokotanyService.searchFokotany(this.searchTerm).subscribe((fokotanys: Fokotany[]) => {
        this.searchResults = fokotanys;
      });
    } else {
      this.searchResults = null; 
    }
   
   }

   loadBureaus() {
    this.fokotanyService.readFokotany().subscribe((fokotanys: Fokotany[]) => {
      this.fokotanys = fokotanys;
    });
  }
 
  resetSearchResults() {
    this.loadBureaus();
    this.searchResults = [];
  }
}
