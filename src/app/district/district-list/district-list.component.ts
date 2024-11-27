import { Component,OnInit } from '@angular/core';
import { District } from 'src/app/district';
import { DistrictService } from 'src/app/district.service';
import { Region } from 'src/app/region';
import { RegionService } from 'src/app/region.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  districts: District[];
  regions: Region[];
  status = false;
  searchTerm: string = '';
  searchResults: District[]=[];
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(
    private districtService: DistrictService,
    private regionService: RegionService
  ) {}

  ngOnInit() {
    
      this.loadElecteurs();
   
  }

  private loadRegionNames() {
    this.regionService.readRegion().subscribe((regions: Region[]) => {
      this.regions = regions;
      this.mapRegionNamesToDistricts();
  
    });
  }

  private mapRegionNamesToDistricts() {
    for (const district of this.districts) {
      const region = this.regions.find(region => region.code_Reg === district.code_Reg);
      if (region) {
        district.nomReg = region.nomReg;
      }
    }
  }


  loadElecteurs() {
    this.districtService.readDistrict().subscribe((districts: District[]) => {
      this.districts = districts;
    });
  }

  
 
  resetSearchResults() {
    this.loadElecteurs();
    this.searchResults = [];
  }
 
    
 searchElecteur() {
  if (this.searchTerm.trim() !== '') {
    this.districtService.searchDistrict(this.searchTerm).subscribe((districts: District[]) => {
      this.searchResults = districts;
    });
  } else {
    this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
  }
 
 }
}
