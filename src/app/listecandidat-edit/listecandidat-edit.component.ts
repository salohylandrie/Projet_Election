import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Listecandidat } from '../listecandidat';
import { ListeCandidatService } from '../liste-candidat.service';

@Component({
  selector: 'app-listecandidat-edit',
  templateUrl: './listecandidat-edit.component.html',
  styleUrls: ['./listecandidat-edit.component.css']
})
export class ListecandidatEditComponent implements OnInit{
  listecandidats: Listecandidat[];
  updatedSuccessfully = false;
  selectedRegion: Listecandidat = {
    code_ListeCand: null,
    nomListe: null,
  };

  constructor(
    private listeCandidatService: ListeCandidatService,
    private route: ActivatedRoute
  ) {
    this.updatedSuccessfully = false;
  }

  ngOnInit() {
    // Récupérer l'ID de la région depuis l'URL
    const code_ListeCand = this.route.snapshot.paramMap.get('id');

    if (code_ListeCand) {
      // Si l'ID est disponible, charger la région correspondante
      this.listeCandidatService.getregionById(code_ListeCand).subscribe((listecandidat: Listecandidat) => {
        this.selectedRegion = listecandidat;
      });
    }
  }
   
 
  closeAlert() {
    this.updatedSuccessfully = false;
  }
 
  createOrUpdateRegion(form) {
    // Utilisez le service pour mettre à jour la région
    this.listeCandidatService.updateRegion(this.selectedRegion.code_ListeCand, this.selectedRegion).subscribe((listecandidat: Listecandidat) => {
      // Réponse de mise à jour réussie
      console.log('Région mise à jour avec succès:', listecandidat);
      this.updatedSuccessfully = true;
    });
  }
}





