import { Component,OnInit } from '@angular/core';
import { ResultatCand } from '../resultat-cand';
import { Electeur } from '../electeur';
import { Bureau } from '../bureau';
import { ElecteurServiceService } from '../electeur-service.service';
import { BureauServiceService } from '../bureau-service.service';
import { ResultatCandService } from '../resultat-cand.service';
import { ElectionprService } from '../electionpr.service';
import { Electionpr } from '../electionpr';


@Component({
  selector: 'app-resultat-candidat-create',
  templateUrl: './resultat-candidat-create.component.html',
  styleUrls: ['./resultat-candidat-create.component.css']
})
export class ResultatCandidatCreateComponent implements OnInit {
  electionprs: ResultatCand[];
  listecandidats: Electeur[];
  Bureaux: Bureau[];
  electionpr: Electionpr[];
  nomsCandidats: string[] = [];
  numsCandidats: number[] = [];
  nomsBureaus: string[] = [];
  selectedCandidatDetails: any = {};
  selectedBureauDetails: any = {};
  selectedElectionDetails: any = {};
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  selectedElecteur: ResultatCand = {
    idres: null,
    idBV: null,
    code_ListeCand: null,
    idcand: null,
    numCand: null,
    nomCand: null,
    prenomCand: null,
    nombreVote: null,
    code_Fokt: null,
    nomFokt: null,
    nomComm: null,
    salleBV: null,
    totalVotes: null,
    code_Elec: null,
    date_Elec: null,
  };

  constructor(
    private electionprService: ResultatCandService,
    private electeurServiceService: ElecteurServiceService,
    private bureauServiceService: BureauServiceService,
    private eleclectionprService: ElectionprService
  ) {}

  ngOnInit() {
    this.electionprService.readResultat().subscribe((electionprs: ResultatCand[]) => {
      this.electionprs = electionprs;
      console.log(this.electionprs);
    });

    this.electeurServiceService.readElecteur().subscribe((listecandidats: Electeur[]) => {
      this.listecandidats = listecandidats;
    });

    this.bureauServiceService.getBureaux().subscribe((Bureaux: Bureau[]) => {
      this.Bureaux = Bureaux;
      console.log(this.Bureaux);
    });


    this.eleclectionprService.readElecteur().subscribe((electionpr: Electionpr[]) => {
      this.electionpr = electionpr;
      console.log(this.Bureaux);
    });
    // Utilisez getItem() au lieu de get()
  
  }

  

  createOrUpdateElecteur(form) {
    if (this.selectedElecteur && this.selectedElecteur.idres  ) {
      const idres = this.selectedElecteur.idres ;
      const updatedElecteur = {
        idres: form.value.idres,
        idcand: this.selectedElecteur.idcand,
        idBV: form.value.idBV,
        nombreVote: form.value.nombreVote,
        code_ListeCand:  this.selectedElecteur.code_ListeCand,
        nomCand: this.selectedElecteur.nomCand,
        prenomCand: this.selectedElecteur.prenomCand,
        numCand: this.selectedElecteur.numCand,
        code_Fokt: this.selectedElecteur.code_Fokt,
        nomFokt: this.selectedElecteur.nomFokt,
        nomComm: this.selectedElecteur.nomComm,
        salleBV: this.selectedElecteur.salleBV,
        totalVotes: this.selectedElecteur.totalVotes,
        code_Elec: form.value.code_Elec,
        date_Elec: form.value.date_Elec,
      };

      
      this.electionprService.updateElecteur(idres, updatedElecteur).subscribe((fokotany: ResultatCand) => {
        console.log(fokotany);
        this.updateElecteursList();
      });

    } else {
      this.electionprService.createResultat(this.selectedElecteur).subscribe((electeur: ResultatCand) => {
        console.log("Election created", electeur);
        this.updateElecteursList();
      });
    }
  }

  private updateElecteursList() {
    this.electionprService.readResultat().subscribe((electionprs: ResultatCand[]) => {
      this.electionprs = electionprs;
    });
  }

  onDistrictSelection() {
    const selectedDistrict = this.listecandidats.find((candidat) => candidat.idcand === this.selectedElecteur.idcand);
    if (selectedDistrict) {
      this.nomsCandidats = [selectedDistrict.nomCand];
      this.numsCandidats = [selectedDistrict.numCand];
      this.nomsCandidats.push(selectedDistrict.code_ListeCand);
      this.nomsCandidats.push(selectedDistrict.prenomCand);
    } else {
      this.nomsCandidats = [];
      this.numsCandidats = [];
    }
  }
  
  onDistrictSelectionn() {
    const selectedDistrict = this.Bureaux.find((bureau) => bureau.idBV === this.selectedElecteur.idBV);
    if (selectedDistrict) {
      this.nomsBureaus = [selectedDistrict.salleBV];
      this.nomsBureaus.push(selectedDistrict.nomFokt);
      this.nomsBureaus.push(selectedDistrict.code_Fokt);
      this.nomsBureaus.push(selectedDistrict.nomComm);
    } else {
      this.nomsBureaus = [];
    }
  }

  onElectionSelectionn() {
    const selectedElection = this.electionpr.find((bureau) => bureau.code_ListeCand === this.selectedElecteur.code_ListeCand);
    if (selectedElection) {
      this.nomsBureaus = [selectedElection.code_Elec];
      
    } else {
      this.nomsBureaus = [];
    }
  }

  onCandidatSelection() {
    const selectedCandidat = this.listecandidats.find((candidat) => candidat.idcand === this.selectedElecteur.idcand);
    this.selectedCandidatDetails = selectedCandidat || {};
  }

  onBureauSelection() {
    const selectedBureau = this.Bureaux.find((bureau) => bureau.idBV === this.selectedElecteur.idBV);
    this.selectedBureauDetails = selectedBureau || {};
  }

  onElectionSelection() {
    const selectedElections = this.electionpr.find((bureau) => bureau.code_ListeCand === this.selectedElecteur.code_ListeCand);
    this.selectedElectionDetails = selectedElections || {};
  }
}