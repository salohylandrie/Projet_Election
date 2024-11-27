import { Component, OnInit } from '@angular/core';
import { ElectionprService } from '../electionpr.service';
import { Electionpr } from '../electionpr';
import { ElecteurServiceService } from '../electeur-service.service';
import { Electeur } from '../electeur';

@Component({
  selector: 'app-electionpr-create',
  templateUrl: './electionpr-create.component.html',
  styleUrls: ['./electionpr-create.component.css']
})
export class ElectionprCreateComponent implements OnInit {
  electionprs: Electionpr[];
  listecandidats: Electeur[];
  
  listesCandidats: string[] = [];
  selectedistrict: string = '';
  nomsCandidats: string[] = [];

  selectedElecteur: Electionpr = { code_Elec: null, date_Elec: null, code_ListeCand: null, nomCand: null };

  constructor(
    private electionprService: ElectionprService,
    private electeurServiceService: ElecteurServiceService
  ) {
    this.electionprService.readElecteur().subscribe((electionprs: Electionpr[]) => {
      this.electionprs = electionprs;
      console.log(this.electionprs);
    });

    this.electeurServiceService.readElecteur().subscribe((listecandidats: Electeur[]) => {
      this.listecandidats = listecandidats;

      // Utilisez un Set pour stocker les codes uniques
      const uniqueCodes = new Set<string>();

      listecandidats.forEach(candidat => {
        uniqueCodes.add(candidat.code_ListeCand);
      });

      this.listesCandidats = Array.from(uniqueCodes); // Convertissez l'ensemble en un tableau
    });
  }

  ngOnInit() {
    // Vérifiez si un code_ListeCand est déjà sélectionné
  }

  createOrUpdateElecteur(form) {
    if (this.selectedElecteur && this.selectedElecteur.code_Elec) {
      const code_Elec = this.selectedElecteur.code_Elec;
      const updatedElecteur = {
        code_ListeCand: this.selectedElecteur.code_ListeCand,
        date_Elec: form.value.date_Elec,
        code_Elec: form.value.code_Elec,
        nomCand: form.value.nomCand, // Utilisez le nom du candidat associé au code_ListeCand
      };
      this.electionprService.updateElecteur(code_Elec, updatedElecteur).subscribe((electeur: Electionpr) => {
        console.log(electeur);
        this.updateElecteursList();
      });
    } else {
      // Laissez le code_Elec comme null pour en générer un nouveau
      form.value.code_Elec = null;
      this.electionprService.createElecteur(form.value).subscribe((electeur: Electionpr) => {
        console.log("Election created", electeur);
        this.updateElecteursList();
      });
    }
  }

  private updateElecteursList() {
    this.electionprService.readElecteur().subscribe((electionprs: Electionpr[]) => {
      this.electionprs = electionprs;
    });
  }

  onDistrictSelection() {
    // Vous devrez récupérer le nomCand associé au code_ListeCand sélectionné
    const selectedDistrict = this.listecandidats.find((listecandidat) => listecandidat.code_ListeCand === this.selectedElecteur.code_ListeCand);
    if (selectedDistrict) {
      this.selectedistrict = selectedDistrict.nomCand;
      
      // Récupérer les noms des candidats associés au code_ListeCand sélectionné
      this.nomsCandidats = this.listecandidats
        .filter((candidat) => candidat.code_ListeCand === this.selectedElecteur.code_ListeCand)
        .map((candidat) => candidat.nomCand);
    } else {
      this.selectedistrict = '';
      this.nomsCandidats = [];
      // Réinitialisez les valeurs si le district n'est pas trouvé
    }
  }
}