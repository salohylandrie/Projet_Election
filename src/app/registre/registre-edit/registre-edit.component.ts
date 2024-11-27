import { Component,OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import {RegistreServiceService} from 'src/app/registre-service.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-registre-edit',
  templateUrl: './registre-edit.component.html',
  styleUrls: ['./registre-edit.component.css']
})
export class RegistreEditComponent  implements OnInit{
  userss: Users[];
  updatedSuccessfully = false;
  selectedElecteur: Users = {
     id: null,
     username: null,
     password: null,
     fokotany: null,
     commune: null,
     district: null,
     prefecture: null,
   
    
  };

  constructor(
    private registreServiceService: RegistreServiceService,
    private route: ActivatedRoute
  ) {this.updatedSuccessfully = false;}

  ngOnInit() {
    // Récupérer l'ID de l'électeur depuis l'URL ou de toute autre manière que vous utilisez
    const id = +this.route.snapshot.paramMap.get('id');
    
    if (id) {
      // Si l'ID est disponible, charger l'électeur correspondant
      this.registreServiceService.getUserById(id).subscribe((users: Users) => {
        this.selectedElecteur = users;
      });
    }
  }
  closeAlert() {
    this.updatedSuccessfully = false; // Fermer la boîte d'alerte en définissant la variable à false
  }
  createOrUpdateUser(form) {
    // Utilisez le service pour mettre à jour l'électeur
    this.registreServiceService.updateUser(this.selectedElecteur.id , this.selectedElecteur).subscribe((users: Users) => {
      // Réponse de mise à jour réussie
      console.log('Électeur mis à jour avec succès :', users);
      this.updatedSuccessfully = true;
    });
  }
}
