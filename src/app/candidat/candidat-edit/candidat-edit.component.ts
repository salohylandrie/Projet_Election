import { Component ,OnInit } from '@angular/core';
import { Electeur } from 'src/app/electeur';
import { ElecteurServiceService} from 'src/app/electeur-service.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-candidat-edit',
  templateUrl: './candidat-edit.component.html',
  styleUrls: ['./candidat-edit.component.css']
})
export class ElecteurEditComponent  implements OnInit{
  electeurs: Electeur[];
  updatedSuccessfully = false;
  selectedElecteur: Electeur = {
    idcand: null,
    numCand: null,
    nomCand: null,
    prenomCand: null, code_ListeCand: null, nomListe: null
    
  };

  constructor(
    private electeurServiceService: ElecteurServiceService,
    private route: ActivatedRoute
  ) {this.updatedSuccessfully = false;}

  ngOnInit() {
    // Récupérer l'ID de l'électeur depuis l'URL ou de toute autre manière que vous utilisez
    const idcand = +this.route.snapshot.paramMap.get('id');
    
    if (idcand) {
      // Si l'ID est disponible, charger l'électeur correspondant
      this.electeurServiceService.getElecteurById(idcand).subscribe((electeur: Electeur) => {
        this.selectedElecteur = electeur;
      });
    }
  }
  closeAlert() {
    this.updatedSuccessfully = false; // Fermer la boîte d'alerte en définissant la variable à false
  }
  createOrUpdateElecteur(form) {
    // Utilisez le service pour mettre à jour l'électeur
    this.electeurServiceService.updateElecteur(this.selectedElecteur.idcand , this.selectedElecteur).subscribe((electeur: Electeur) => {
      // Réponse de mise à jour réussie
      console.log('Électeur mis à jour avec succès :', electeur);
      this.updatedSuccessfully = true;
    });
  }
}
  


