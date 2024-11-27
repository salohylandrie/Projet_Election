import { Component,OnInit } from '@angular/core';
import { Bureau } from 'src/app/bureau';
import { BureauServiceService } from 'src/app/bureau-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bureau-edit',
  templateUrl: './bureau-edit.component.html',
  styleUrls: ['./bureau-edit.component.css']
})
export class BureauEditComponent  implements OnInit{
  bureaus: Bureau[];
  updatedSuccessfully = false;
  selectedBureau: Bureau = {
    idBV: null,
    salleBV: null,
    nbElecInscri: null,
    nbVotant: null,
    nbVoteBl: null,
    nbVoteNul: null,
    suffrageExprime: null ,
    code_Fokt: null,
    nomFokt: null,
    nomComm: null,nomDistr: null,nomReg: null,
    code_Comm: null,
    code_Distr: null,
    centreBV: null,
    
  };

  constructor(
    private bureauServiceService: BureauServiceService,
    private route: ActivatedRoute
  ) {this.updatedSuccessfully = false;}

  ngOnInit() {
    // Récupérer l'ID de l'électeur depuis l'URL ou de toute autre manière que vous utilisez
    const idBV = +this.route.snapshot.paramMap.get('id');
    
    if (idBV) {
      // Si l'ID est disponible, charger l'électeur correspondant
      this.bureauServiceService.getBureauById(idBV).subscribe((bureau: Bureau) => {
        this.selectedBureau = bureau;
      });
    }
  }
  closeAlert() {
    this.updatedSuccessfully = false; // Fermer la boîte d'alerte en définissant la variable à false
  }
  createOrUpdateBureau(form) {
    // Utilisez le service pour mettre à jour l'électeur
    this.bureauServiceService.updateBureau(this.selectedBureau.idBV , this.selectedBureau).subscribe((bureau: Bureau) => {
      // Réponse de mise à jour réussie
      console.log('Électeur mis à jour avec succès :', bureau);
      this.updatedSuccessfully = true;
    });
  }
}
