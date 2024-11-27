import { Component,OnInit } from '@angular/core';
import { Electeur } from 'src/app/electeur';
import { ElecteurServiceService} from 'src/app/electeur-service.service';
import { ListeCandidatService } from 'src/app/liste-candidat.service';
import { Listecandidat } from 'src/app/listecandidat';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-electeur-create',
  templateUrl: './candidat-create.component.html',
  styleUrls: ['./candidat-create.component.css']
})
export class ElecteurCreateComponent implements OnInit {
	electeurs: Electeur[];
	listecandidats: Listecandidat[];
	selectedElecteur: Electeur = { idcand: null, numCand: null, nomCand: null, prenomCand: null, code_ListeCand: null, nomListe: null };
  
	constructor(private electeurServiceService: ElecteurServiceService, private listeCandidatService: ListeCandidatService, private toastr: ToastrService) {
	  this.electeurServiceService.readElecteur().subscribe((electeurs: Electeur[]) => {
		this.electeurs = electeurs;
		console.log(this.electeurs);
	  });
  
	  this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[]) => {
		this.listecandidats = listecandidats;
		console.log(this.listecandidats);
	  });
  
	  const code_ListeCand = sessionStorage.getItem('code_ListeCand');
  
	  // Associez l'ID de l'utilisateur au fokotany en cours de création
	  this.selectedElecteur.code_ListeCand = code_ListeCand;
	}
  
	ngOnInit() {}
  
	createOrUpdateElecteur(form) {
		if (form.invalid || form.pending) {
			console.log('Formulaire invalide ou en attente');
			return;
		  }
		  if (isNaN(Number(this.selectedElecteur.numCand))) {
			this.toastr.error('Numéro du candidat doit être un nombre.', 'Erreur');
			return;
		  }
		  // Vérification si nomCand et prenomCand sont des lettres avec espaces
		  const lettersWithSpacesRegex = /^[a-zA-Z ]+$/;
		
		  if (!lettersWithSpacesRegex.test(this.selectedElecteur.nomCand)) {
			this.toastr.error('Nom du candidat doit contenir uniquement des lettres et des espaces.', 'Erreur');
			return;
		  }
		
		  if (!lettersWithSpacesRegex.test(this.selectedElecteur.prenomCand)) {
			this.toastr.error('Prénom du candidat doit contenir uniquement des lettres et des espaces.', 'Erreur');
			return;
		  }
  
	  this.selectedElecteur.idcand = form.value.idcand;
	  this.selectedElecteur.numCand = form.value.numCand;
	  this.selectedElecteur.nomCand = form.value.nomCand;
	  this.selectedElecteur.prenomCand = form.value.prenomCand;
	  this.selectedElecteur.code_ListeCand = form.value.code_ListeCand;
	  this.selectedElecteur.nomListe = form.value.nomListe;
  
	  if (this.selectedElecteur && this.selectedElecteur.idcand) {
		const idcand = this.selectedElecteur.idcand;
		const updatedElecteur = this.selectedElecteur;
		this.electeurServiceService.updateElecteur(idcand, updatedElecteur).subscribe((electeur: Electeur) => {
		  console.log(electeur);
		  this.electeurServiceService.readElecteur().subscribe((electeurs: Electeur[]) => {
			this.electeurs = electeurs;
		  });
		});
	  } else {
		this.electeurServiceService.createElecteur(this.selectedElecteur).subscribe((electeur: Electeur) => {
		  console.log('Électeur créé', electeur);
		  this.toastr.success('Électeur créé avec succès.', 'Succès');
		  this.updateElecteursList();
		});
	  }
	}
  
	private updateElecteursList() {
	  this.electeurServiceService.readElecteur().subscribe((electeurs: Electeur[]) => {
		this.electeurs = electeurs;
	  });
	}
  }


