import { Component ,OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';7
import { Listecandidat } from '../listecandidat';
import { ListeCandidatService } from '../liste-candidat.service';

@Component({
  selector: 'app-listecandidat-list',
  templateUrl: './listecandidat-list.component.html',
  styleUrls: ['./listecandidat-list.component.css']
})
export class ListecandidatListComponent implements OnInit {
  listecandidats: Listecandidat[];
  searchTerm: string = '';
  searchResults: Listecandidat[]=[];

  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
        

  selectedBureau: Listecandidat = {code_ListeCand: null , nomListe: null}
  constructor(private listeCandidatService: ListeCandidatService, private router: Router, private renderer: Renderer2, private el: ElementRef) {
    this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[])=>{
    this.listecandidats = listecandidats;
    console.log(this.listecandidats);
  }) }
  ngOnInit()
  {
   this.loadBureaus();
  }
  
  showDeleteModal(bureau: Listecandidat) {
    this.selectedBureau = bureau; // Mettez à jour selectedBureau
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  hideDeleteModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
 editBureau(bureau: Listecandidat) {
   // Vous pouvez utiliser le router pour naviguer vers le composant de modification avec l'ID de l'électeur sélectionné
   this.selectedBureau = { ...bureau }
   this.router.navigate(['/listecandidat-edit-route', bureau.code_ListeCand]);
 
 }

 viewBureauDetails(idBureau: number) {
   // Utilisation de la route pour rediriger vers le composant de détails avec l'ID de l'électeur sélectionné
   this.router.navigate(['/bureau-view-route', idBureau]);
 }

 deleteBureau(code_ListeCand) {
  console.log("Attempting to delete Bureau with ID: ", code_ListeCand);
  this.listeCandidatService.deleteRegion(code_ListeCand).subscribe(() => {
    console.log("Listecandidat deleted, ", code_ListeCand);
    // Mettez à jour la liste des bureaux après la suppression
    this.listecandidats = this.listecandidats.filter((bureau) => bureau.code_ListeCand !== code_ListeCand);
  });
}
  



 loadBureaus() {
   this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[]) => {
     this.listecandidats = listecandidats;
   });
 }

 resetSearchResults() {
   this.loadBureaus();
   this.searchResults = [];
 }

   
searchBureau() {
 if (this.searchTerm.trim() !== '') {
   this.listeCandidatService.searchRegion(this.searchTerm).subscribe((listecandidats: Listecandidat[]) => {
     this.searchResults = listecandidats;
   });
 } else {
   this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
 }

}
}
