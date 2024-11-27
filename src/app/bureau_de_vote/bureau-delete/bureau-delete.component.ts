import { Component,OnInit } from '@angular/core';
import { Bureau } from 'src/app/bureau';
import { BureauServiceService } from 'src/app/bureau-service.service';


@Component({
  selector: 'app-bureau-delete',
  templateUrl: './bureau-delete.component.html',
  styleUrls: ['./bureau-delete.component.css']
})
export class BureauDeleteComponent implements OnInit{
  bureaus: Bureau[];
  selectedBureau: Bureau = {idBV: null , salleBV: null, nbElecInscri: null, nbVotant: null, nbVoteBl: null, nbVoteNul: null, suffrageExprime: null,  code_Fokt: null,
    nomFokt: null,nomComm: null,nomDistr: null,nomReg: null , code_Comm: null, centreBV: null,
    code_Distr: null,
    }
	constructor(private bureauServiceService: BureauServiceService) {
		this.bureauServiceService.getBureaux().subscribe((bureaus: Bureau[])=>{
		this.bureaus = bureaus;
		console.log(this.bureaus);
	}) }
	ngOnInit() 
	{
	}



}
