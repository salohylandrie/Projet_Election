import { Component,OnInit } from '@angular/core';
import { Commune } from '../commune';
import { District } from '../district';
import { DistrictService } from '../district.service';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-commune-list',
  templateUrl: './commune-list.component.html',
  styleUrls: ['./commune-list.component.css']
})
export class CommuneListComponent implements OnInit {
  districts: District[];
  communes: Commune[];Region
  status = false;
  searchTerm: string = '';
  searchResults: Commune[]=[];
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(
    private districtService: DistrictService,
    private communeService: CommuneService 
  ) {}

  ngOnInit() {
    this.communeService.readCommune().subscribe((communes: Commune[]) => {
      this.communes = communes;
      this.loadDistrictNames();
      this.loadElecteurs();
    });
  }

  private loadDistrictNames() {
    this.districtService.readDistrict().subscribe((districts: District[]) => {
      this.districts = districts;
      this.mapDistrictNamesToDistricts();
    });
  }

  private mapDistrictNamesToDistricts() {
    for (const commune of this.communes) {
      const district = this.districts.find(district => district.code_Distr === commune.code_Distr);
      if (district) {
        commune.nomDistr = district.nomDistr;
      }
    }
  }


  loadElecteurs() {
    this.communeService.readCommune().subscribe((communes: Commune[]) => {
      this.communes = communes;
    });
  }

  
 
  resetSearchResults() {
    this.loadElecteurs();
    this.searchResults = [];
  }
 
    
 searchElecteur() {
  if (this.searchTerm.trim() !== '') {
    this.communeService.searchCommune(this.searchTerm).subscribe((communes: Commune[]) => {
      this.searchResults = communes;
    });
  } else {
    this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
  }
 
 }
}
