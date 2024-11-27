import { Component,OnInit } from '@angular/core';
import { Electeur } from 'src/app/electeur';
import {ElecteurServiceService} from 'src/app/electeur-service.service';

@Component({
  selector: 'app-candidat-delete',
  templateUrl: './candidat-delete.component.html',
  styleUrls: ['./candidat-delete.component.css']
})
export class ElecteurDeleteComponent implements OnInit{
  electeurs: Electeur[];
	
	constructor(private electeurServiceService: ElecteurServiceService) {
		this.electeurServiceService.readElecteur().subscribe((electeurs: Electeur[])=>{
		this.electeurs = electeurs;
		console.log(this.electeurs);
	}) }
	ngOnInit()
	{
	}



}
