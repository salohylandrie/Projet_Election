import { Component ,OnInit} from '@angular/core';
import { Emplacement } from '../emplacement';
import { EmplacementService } from '../emplacement.service';

@Component({
  selector: 'app-emplacement-list',
  templateUrl: './emplacement-list.component.html',
  styleUrls: ['./emplacement-list.component.css']
})
export class EmplacementListComponent implements OnInit {


  emplacements: Emplacement[];
  searchTerm: string = '';
  searchResults: Emplacement[]=[];

  

  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  
  selectedElecteur: Emplacement = { nomReg: null , nomDistr: null, nomComm: null, nomFokt: null}
	constructor(private emplacementService: EmplacementService) {
		this.emplacementService.readUser().subscribe((emplacements: Emplacement[])=>{
		this.emplacements = emplacements;
		console.log(this.emplacements);
    
	}) }
  ngOnInit()
  {
   this.loadElecteurs();
   
  }

  loadElecteurs() {
    this.emplacementService.readUser().subscribe((emplacements: Emplacement[]) => {
      this.emplacements = emplacements;
    });
  }

  
 
  resetSearchResults() {
    this.loadElecteurs();
    this.searchResults = [];
  }
 
    
 searchElecteur() {
  if (this.searchTerm.trim() !== '') {
    this.emplacementService.searchEmplacement(this.searchTerm).subscribe((emplacements: Emplacement[]) => {
      this.searchResults = emplacements;
    });
  } else {
    this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
  }
 
 }
}
