import { Component ,OnInit} from '@angular/core';
import { Users } from 'src/app/users';
import { ActivatedRoute } from '@angular/router';
import {RegistreServiceService} from 'src/app/registre-service.service';
import { Electeur } from 'src/app/electeur';

@Component({
  selector: 'app-registre-view',
  templateUrl: './registre-view.component.html',
  styleUrls: ['./registre-view.component.css']
})
export class RegistreViewComponent implements OnInit {
  users: Users; // Assurez-vous d'importer la classe Electeur

  constructor(private route: ActivatedRoute, private registreServiceService: RegistreServiceService) { }

  ngOnInit() {
    // Récupérer l'ID de l'électeur depuis l'URL
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.loadElecteurDetails(id);
    });
  }
  
  loadElecteurDetails(id: number) {
    this.registreServiceService.getUserDetails(id).subscribe((users: Users) => {
      this.users = users;
    });

}

}