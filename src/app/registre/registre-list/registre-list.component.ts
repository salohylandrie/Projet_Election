import { Component,OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import {RegistreServiceService} from 'src/app/registre-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre-list',
  templateUrl: './registre-list.component.html',
  styleUrls: ['./registre-list.component.css']
})
export class RegistreListComponent implements OnInit {


  userss: Users[];
  searchTerm: string = '';
  searchResults: Users[]=[];

  

  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
  selectedElecteur: Users = { id: null , username: null, password: null, fokotany: null, commune: null, district: null, prefecture: null}
	constructor(private registreServiceService: RegistreServiceService, private router: Router) {
		this.registreServiceService.readUser().subscribe((userss: Users[])=>{
		this.userss = userss;
		console.log(this.userss);
    
	}) }
  ngOnInit()
  {
   this.loadElecteurs();
  }


  showDeleteModal(users: Users) {
    this.selectedElecteur = users; // Mettez à jour selectedBureau
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  hideDeleteModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  
  deleteUser(id) {
    this.registreServiceService.deleteUser(id).subscribe(() => {
      console.log("Electeur deleted, ", id);
      // Mettez à jour la liste des électeurs après la suppression
      this.userss = this.userss.filter((user) => user.id !== id);
    });
  }


  viewUserDetails(id: number) {
    // Utilisation de la route pour rediriger vers le composant de détails avec l'ID de l'électeur sélectionné
    this.router.navigate(['/registre-view-route', id]);
  }


 loadElecteurs() {
   this.registreServiceService.readUser().subscribe((userss: Users[]) => {
     this.userss = userss;
   });
 }

 resetSearchResults() {
   this.loadElecteurs();
   this.searchResults = [];
 }

   
searchElecteur() {
 if (this.searchTerm.trim() !== '') {
   this.registreServiceService.searchUser(this.searchTerm).subscribe((userss: Users[]) => {
     this.searchResults = userss;
   });
 } else {
   this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
 }

}

   
editUser(users: Users) {
  // Vous pouvez utiliser le router pour naviguer vers le composant de modification avec l'ID de l'électeur sélectionné
  this.selectedElecteur = { ...users }
  this.router.navigate(['/registre-edit-route', users.id]);

}


}
