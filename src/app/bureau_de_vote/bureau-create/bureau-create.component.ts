import { Component, OnInit } from '@angular/core';
import { Bureau } from 'src/app/bureau';
import { BureauServiceService } from 'src/app/bureau-service.service';
import { FokotanyService } from 'src/app/fokotany.service';
import { Fokotany } from 'src/app/fokotany';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bureau-create',
  templateUrl: './bureau-create.component.html',
  styleUrls: ['./bureau-create.component.css']
})
export class BureauCreateComponent implements OnInit {
  bureaus: Bureau[];
  selectedRegion: string = '';
  selectedDistrict: string = '';
  selecteCommune: string = '';
  fokotanyList: Fokotany[];
  selectedCodeFokt: string;
  selectedBureau: Bureau = {
    idBV: null,
    salleBV: null,
    nbElecInscri: null,
    nbVotant: null,
    nbVoteBl: null,
    nbVoteNul: null,
    suffrageExprime: null,
    code_Fokt: null,
    nomFokt: null,
    nomComm: null,
    nomDistr: null,
    nomReg: null,
    code_Comm: null,
    code_Distr: null,
    centreBV: null,
    // Ajout de cette ligne pour éviter les erreurs de compilation
  };
  errorMessageNbVotant: string = '';
  errorMessageNbVoteBl: string = '';
  errorMessageNbVoteNul: string = '';
  errorMessageNbVotante: string = '';

  constructor(
    private bureauServiceService: BureauServiceService,
    private fokotanyService: FokotanyService,
    private toastr: ToastrService
  ) {
    // Récupérez la liste des bureaux de vote lors de l'initialisation du composant.
    this.getBureaus();
    const code_Fokt = sessionStorage.getItem('code_Fokt');

    // Associez l'ID de l'utilisateur au bureau en cours de création
    this.selectedBureau.code_Fokt = code_Fokt;
  }

  ngOnInit() {
    // Récupérez la liste des fokotanys lors de l'initialisation du composant.
    this.getFokotanys();
  }

  // Méthode pour créer ou mettre à jour un bureau de vote.
  createOrUpdateBureau(form) {
   
      if (form.invalid || form.pending) {
        console.log('Formulaire invalide ou en attente');
        return;
        }


    // Vérifier les conditions
    if ( form.value.nbVotant <=  form.value.nbElecInscri) {
      this.errorMessageNbVotant = '';
    } else {
      this.errorMessageNbVotant = 'Le nombre de votants ne peut pas dépasser le nombre d\'électeurs inscrits.';
    }

    if ( form.value.nbVoteBl <=  form.value.nbVotant) {
      this.errorMessageNbVoteBl = '';
    } else {
      this.errorMessageNbVoteBl = 'Le nombre de votes blancs ne peut pas dépasser le nombre de votants.';
    }

    if ( form.value.nbVoteNul <=  form.value.nbVotant) {
      this.errorMessageNbVoteNul = '';
    } else {
      this.errorMessageNbVoteNul = 'Le nombre de votes nuls ne peut pas dépasser le nombre de votants.';
    }

    if ( form.value.nbVoteBl +  form.value.nbVoteNul <=  form.value.nbVotant) {
      this.errorMessageNbVotante = '';
    } else {
      this.errorMessageNbVotante = 'La somme du nombre de votes nuls et du nombre de votes blancs ne peut pas dépasser le nombre de votants.';
    }

    if (
      this.errorMessageNbVotant === '' &&
      this.errorMessageNbVoteBl === '' &&
      this.errorMessageNbVoteNul === '' &&
      this.errorMessageNbVotante === ''
    ) {
      // Toutes les conditions sont respectées, procédez à la création/mise à jour du bureau de vote.
      if (this.selectedBureau && this.selectedBureau.idBV) {
        // Si selectedBureau a un ID (idBV), cela signifie que vous effectuez une mise à jour.
      
        const idBV = this.selectedBureau.idBV;
        const updatedBureau = {
          
          code_Fokt: this.selectedBureau.code_Fokt,
          idBV:  form.value.idBV,
          nomFokt: form.value.nomFokt,
          salleBV: form.value.salleBV,
          nbElecInscri: form.value.nbElecInscri,
          nbVotant: form.value.nbVotant,
          nbVoteBl: form.value.nbVoteBl,
          nbVoteNul: form.value.nbVoteNul,
          suffrageExprime: form.value.suffrageExprime,
          nomComm: this.selecteCommune,
          nomDistr: this.selectedDistrict,
          nomReg: this.selectedRegion , 
          code_Comm: form.value.code_Comm,
          code_Distr: form.value.code_Distr,
          centreBV: form.value.centreBV,
        };

        this.bureauServiceService.updateBureau(idBV, updatedBureau).subscribe(
          (bureau: Bureau) => {
            console.log('Bureau mis à jour :', bureau);
            // Mettez à jour la liste des bureaux de vote après la mise à jour.
            this.getBureaus();
          },
          (error) => {
            console.error('Erreur lors de la mise à jour du bureau :', error);
          }
        );
      } else {
        // Si selectedBureau n'a pas d'ID (idBV), cela signifie que vous créez un nouveau bureau de vote.
        this.bureauServiceService.createBureau( form.value).subscribe(
          (bureau: Bureau) => {
            this.toastr.success('Électeur créé avec succès.', 'Succès');
            console.log('Bureau créé :', bureau);
            // Mettez à jour la liste des bureaux de vote après la création.
            this.getBureaus();
          },
          (error) => {
            console.error('Erreur lors de la création du bureau :', error);
          }
        );
      }
    }
  }

  // Méthode pour mettre à jour la liste des bureaux de vote.
  private getBureaus() {
    this.bureauServiceService.getBureaux().subscribe((bureaus: Bureau[]) => {
      this.bureaus = bureaus;
    });
  }

  // Méthode pour mettre à jour la liste des fokotanys.
  private getFokotanys() {
    this.fokotanyService.readFokotany().subscribe((fokotanyList: Fokotany[]) => {
      this.fokotanyList = fokotanyList;
    });
  }

  onDistrictSelection() {
    // Vous devrez récupérer le nomReg, nomDistr, nomComm associés au district sélectionné en fonction de son nomFokt
    const selectedFokotany = this.fokotanyList.find((fokotany) => fokotany.nomFokt === this.selectedBureau.nomFokt);
    if (selectedFokotany) {
      this.selectedRegion = selectedFokotany.nomReg;
      this.selectedDistrict = selectedFokotany.nomDistr;
      this.selecteCommune = selectedFokotany.nomComm;
    } else {
      this.selectedRegion = '';
      this.selectedDistrict = '';
      this.selecteCommune = '';
      // Réinitialisez les valeurs si le fokotany n'est pas trouvé
    }
  }
}