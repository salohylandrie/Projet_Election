import { Component,OnInit } from '@angular/core';
import { Listecandidat } from '../listecandidat';
import { ListeCandidatService } from '../liste-candidat.service';

@Component({
  selector: 'app-listecand-delete',
  templateUrl: './listecand-delete.component.html',
  styleUrls: ['./listecand-delete.component.css']
})
export class ListecandDeleteComponent implements OnInit{
  listecandidats: Listecandidat[];
	
	constructor(private listeCandidatService: ListeCandidatService) {
		this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[])=>{
		this.listecandidats = listecandidats;
		console.log(this.listecandidats);
	}) }
	ngOnInit()
	{
	}

}