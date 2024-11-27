

import { Component , OnInit, Renderer2, ElementRef } from '@angular/core';
import { Electionpr } from '../electionpr';
import { ElectionprService } from '../electionpr.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-electionpr-list',
  templateUrl: './electionpr-list.component.html',
  styleUrls: ['./electionpr-list.component.css']
})
export class ElectionprListComponent implements OnInit {
  electionprs: Electionpr[];
  searchTerm: string = '';
  searchResults: Electionpr[]=[];
  dataLoaded: boolean = false; 

  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
  selectedElecteur: Electionpr = {code_Elec: null , date_Elec: null, code_ListeCand: null, nomCand: null}
  constructor(private electionprService: ElectionprService, private router: Router, private renderer: Renderer2, private el: ElementRef) {
    this.electionprService.readElecteur().subscribe((electionprs: Electionpr[])=>{
    this.electionprs = electionprs;
    console.log(this.electionprs);
  }) }
  ngOnInit() {
    if (!this.dataLoaded) { // Charger les données uniquement si elles n'ont pas encore été chargées
      this.loadElecteurs();
      this.dataLoaded = true; // Marquer les données comme chargées
    }
  }
  loadElecteurs() {
    this.electionprService.readElecteur().subscribe((electionprs: Electionpr[]) => {
      this.electionprs = this.removeDuplicates(electionprs, 'code_Elec');
    });
  }

  showDeleteModal(electeur: Electionpr) {
   this.selectedElecteur = electeur; // Mettez à jour selectedBureau
   const modal = document.getElementById('myModal');
   modal.style.display = 'block';
 }

 hideDeleteModal() {
   const modal = document.getElementById('myModal');
   modal.style.display = 'none';
 }
  
 editElecteur(electeur: Electionpr) {
   // Vous pouvez utiliser le router pour naviguer vers le composant de modification avec l'ID de l'électeur sélectionné
   this.selectedElecteur = { ...electeur }
   this.router.navigate(['/electeur-edit-route', electeur.code_Elec]);
 
 }

 viewElecteurDetails(idElecteur: number) {
   // Utilisation de la route pour rediriger vers le composant de détails avec l'ID de l'électeur sélectionné
   this.router.navigate(['/electeur-view-route', idElecteur]);
 }

 deleteElecteur(code_Elec) {
  this.electionprService.deleteElecteur(code_Elec).subscribe(() => {
    console.log("Electeur deleted, ", code_Elec);
    // Mettez à jour la liste des électeurs après la suppression
    this.electionprs = this.electionprs.filter((electeur) => electeur.code_Elec !== code_Elec);
    this.electionprs = this.removeDuplicates(this.electionprs, 'code_Elec');
  });
}



 

 resetSearchResults() {
   this.loadElecteurs();
   this.searchResults = [];
 }

   
searchElecteur() {
 if (this.searchTerm.trim() !== '') {
   this.electionprService.searchElecteur(this.searchTerm).subscribe((electionprs: Electionpr[]) => {
     this.searchResults = electionprs;
   });
 } else {
   this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
 }

}
removeDuplicates(array: Electionpr[], key: string): Electionpr[] {
  const uniqueKeys = new Set();
  return array.filter((item) => {
    if (!uniqueKeys.has(item[key])) {
      uniqueKeys.add(item[key]);
      return true;
    }
    return false;
  });
}
}
