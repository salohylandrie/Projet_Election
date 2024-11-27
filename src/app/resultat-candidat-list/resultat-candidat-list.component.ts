import { Component,OnInit , Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';7
import { ResultatCand } from '../resultat-cand';
import { ResultatCandService } from '../resultat-cand.service';

@Component({
  selector: 'app-resultat-candidat-list',
  templateUrl: './resultat-candidat-list.component.html',
  styleUrls: ['./resultat-candidat-list.component.css']
})
export class ResultatCandidatListComponent implements OnInit {
  listecandidats: ResultatCand[];
  searchTerm: string = '';
  searchResults: ResultatCand[]=[];

  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
        

  selectedBureau: ResultatCand = { idres: null,
    idBV: null,
    code_ListeCand: null,
    idcand: null,
    numCand: null,
    nomCand: null,
    prenomCand: null,
    nombreVote: null,
    code_Fokt: null,
    nomFokt: null,
    nomComm: null,
    salleBV: null, totalVotes: null,code_Elec: null,
    date_Elec: null,}
  constructor(private resultatCandService: ResultatCandService, private router: Router, private renderer: Renderer2, private el: ElementRef) {
    this.resultatCandService.readResultat().subscribe((listecandidats: ResultatCand[])=>{
    this.listecandidats = listecandidats;
    console.log(this.listecandidats);
  }) }
  ngOnInit()
  {
   this.loadBureaus();
  }
  loadBureaus() {
    this.resultatCandService.readResultat().subscribe((listecandidats: ResultatCand[]) => {
      this.listecandidats = listecandidats;
    });
  }
 
  resetSearchResults() {
    this.loadBureaus();
    this.searchResults = [];
  }
 
    
 searchBureau() {
  if (this.searchTerm.trim() !== '') {
    this.resultatCandService.searchResultat(this.searchTerm).subscribe((listecandidats: ResultatCand[]) => {
      this.searchResults = listecandidats;
    });
  } else {
    this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
  }
 
 }
}
