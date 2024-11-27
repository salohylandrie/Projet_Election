import { Component ,OnInit, Renderer2, ElementRef} from '@angular/core';
import { Region } from 'src/app/region';
import { RegionService } from 'src/app/region.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {
  regions: Region[];
  searchTerm: string = '';
  searchResults: Region[]=[];

  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
        

  selectedBureau: Region = {code_Reg: null , nomReg: null}
  constructor(private regionService: RegionService, private router: Router, private renderer: Renderer2, private el: ElementRef) {
    this.regionService.readRegion().subscribe((regions: Region[])=>{
    this.regions = regions;
    console.log(this.regions);
  }) }
  ngOnInit()
  {
   this.loadBureaus();
  }
  
  showDeleteModal(region: Region) {
    this.selectedBureau = region; // Mettez à jour selectedBureau
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  hideDeleteModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
 editBureau(region: Region) {
   // Vous pouvez utiliser le router pour naviguer vers le composant de modification avec l'ID de l'électeur sélectionné
   this.selectedBureau = { ...region }
   this.router.navigate(['/region-edit-route', region.code_Reg]);
 
 }

 viewBureauDetails(idBureau: number) {
   // Utilisation de la route pour rediriger vers le composant de détails avec l'ID de l'électeur sélectionné
   this.router.navigate(['/bureau-view-route', idBureau]);
 }

 deleteBureau(code_Reg) {
  console.log("Attempting to delete Bureau with ID: ", code_Reg);
  this.regionService.deleteRegion(code_Reg).subscribe(() => {
    console.log("Region deleted, ", code_Reg);
    // Mettez à jour la liste des bureaux après la suppression
    this.regions = this.regions.filter((region) => region.code_Reg !== code_Reg);
  });
}
  



 loadBureaus() {
   this.regionService.readRegion().subscribe((regions: Region[]) => {
     this.regions = regions;
   });
 }

 resetSearchResults() {
   this.loadBureaus();
   this.searchResults = [];
 }

   
searchBureau() {
 if (this.searchTerm.trim() !== '') {
   this.regionService.searchRegion(this.searchTerm).subscribe((regions: Region[]) => {
     this.searchResults = regions;
   });
 } else {
   this.searchResults = null; // Réinitialisez searchResults si la recherche est vide
 }

}
}
