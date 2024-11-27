import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Electeur } from 'src/app/electeur';
import {ElecteurServiceService} from 'src/app/electeur-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-electeur-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class ElecteurListComponent implements OnInit {
   electeurs: Electeur[];
   searchTerm: string = '';
   searchResults: Electeur[]=[];

   status = false;
   addToggle()
   {
     this.status = !this.status;       
   }
  
   selectedElecteur: Electeur = {idcand: null , numCand: null, nomCand: null, prenomCand: null, code_ListeCand: null, nomListe: null}
   constructor(private electeurServiceService: ElecteurServiceService, private router: Router, private renderer: Renderer2, private el: ElementRef) {
     this.electeurServiceService.readElecteur().subscribe((electeurs: Electeur[])=>{
     this.electeurs = electeurs;
     console.log(this.electeurs);
   }) }
   ngOnInit()
   {
    this.loadElecteurs();
   }

   showDeleteModal(electeur: Electeur) {
    this.selectedElecteur = electeur; // Mettez à jour selectedBureau
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  hideDeleteModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
   
  editElecteur(electeur: Electeur) {
    // Vous pouvez utiliser le router pour naviguer vers le composant de modification avec l'ID de l'électeur sélectionné
    this.selectedElecteur = { ...electeur }
    this.router.navigate(['/electeur-edit-route', electeur.idcand]);
  
  }

  viewElecteurDetails(idElecteur: number) {
    // Utilisation de la route pour rediriger vers le composant de détails avec l'ID de l'électeur sélectionné
    this.router.navigate(['/electeur-view-route', idElecteur]);
  }

  deleteElecteur(idcand) {
    this.electeurServiceService.deleteElecteur(idcand).subscribe(() => {
      console.log("Electeur deleted, ", idcand);
      // Mettez à jour la liste des électeurs après la suppression
      this.electeurs = this.electeurs.filter((electeur) => electeur.idcand !== idcand);
    });
  }



  loadElecteurs() {
    this.electeurServiceService.readElecteur().subscribe((electeurs: Electeur[]) => {
      this.electeurs = electeurs;
    });
  }

  resetSearchResults() {
    this.loadElecteurs();
    this.searchResults = [];
  }

    
searchElecteur() {
  if (this.searchTerm.trim() !== '') {
    this.electeurServiceService.searchElecteur(this.searchTerm).subscribe((electeurs: Electeur[]) => {
      this.searchResults = electeurs;
    });
  } else {
    this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
  }

}
  
}