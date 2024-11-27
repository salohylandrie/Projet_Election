import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import { RegionService } from '../region.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-region-edit',
  templateUrl: './region-edit.component.html',
  styleUrls: ['./region-edit.component.css']
})
export class RegionEditComponent implements OnInit{
  regions: Region[];
  updatedSuccessfully = false;
  selectedRegion: Region = {
    code_Reg: null,
    nomReg: null,
  };

  constructor(
    private regionService: RegionService,
    private route: ActivatedRoute
  ) {
    this.updatedSuccessfully = false;
  }

  ngOnInit() {
    // Récupérer l'ID de la région depuis l'URL
    const code_Reg = this.route.snapshot.paramMap.get('id');

    if (code_Reg) {
      // Si l'ID est disponible, charger la région correspondante
      this.regionService.getregionById(code_Reg).subscribe((region: Region) => {
        this.selectedRegion = region;
      });
    }
  }
   
 
  closeAlert() {
    this.updatedSuccessfully = false;
  }
 
  createOrUpdateRegion(form) {
    // Utilisez le service pour mettre à jour la région
    this.regionService.updateRegion(this.selectedRegion.code_Reg, this.selectedRegion).subscribe((region: Region) => {
      // Réponse de mise à jour réussie
      console.log('Région mise à jour avec succès:', region);
      this.updatedSuccessfully = true;
    });
  }
}




