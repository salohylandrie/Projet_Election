
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ElecteurServiceService} from 'src/app/electeur-service.service';
import { Electeur } from 'src/app/electeur';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class ElecteurViewComponent implements OnInit {
  electeur: Electeur; // Assurez-vous d'importer la classe Electeur

  constructor(private route: ActivatedRoute, private electeurServiceService: ElecteurServiceService) { }

  ngOnInit() {
    // Récupérer l'ID de l'électeur depuis l'URL
    this.route.params.subscribe(params => {
      const idcand = +params['id']; 
      this.loadElecteurDetails(idcand);
    });
  }
  
  loadElecteurDetails(idcand: number) {
    this.electeurServiceService.getElecteurDetails(idcand).subscribe((electeur: Electeur) => {
      this.electeur = electeur;
    });




}



}
