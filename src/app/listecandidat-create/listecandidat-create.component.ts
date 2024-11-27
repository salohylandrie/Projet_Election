import { Component,OnInit } from '@angular/core';
import { Listecandidat } from '../listecandidat';
import { ListeCandidatService } from '../liste-candidat.service';

@Component({
  selector: 'app-listecandidat-create',
  templateUrl: './listecandidat-create.component.html',
  styleUrls: ['./listecandidat-create.component.css']
})
export class ListecandidatCreateComponent implements OnInit{
  
  public nomListe: string;

  listecandidats: Listecandidat[];
selectedRegion: Listecandidat = { code_ListeCand: null , nomListe: null}
constructor(private listeCandidatService: ListeCandidatService) {
  this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[])=>{
  this.listecandidats = listecandidats;
  console.log(this.listecandidats);
}) }
ngOnInit()
{
}
createOrUpdateRegion(form){
  form.value.code_ListeCand = this.selectedRegion.code_ListeCand;
  form.value.nomListe = this.selectedRegion.nomListe;

  
  
if (this.selectedRegion && this.selectedRegion.code_ListeCand ) {
  const code_ListeCand = this.selectedRegion.code_ListeCand ;
  const updatedRegion = form.value;
  this.listeCandidatService.updateRegion(code_ListeCand, updatedRegion).subscribe((listecandidat: Listecandidat) => {
    console.log(listecandidat);
    this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[]) => {
    this.listecandidats = listecandidats;
    });
  });
  }
else{
  this.listeCandidatService.createRegion(form.value).subscribe((listecandidat: Listecandidat)=>{
    console.log("Product created", listecandidat);
    this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[])=>{
      this.listecandidats = listecandidats;
    })
  });
}
}
private updateRegionsList() {
  this.listeCandidatService.readRegion().subscribe((listecandidats: Listecandidat[]) => {
    this.listecandidats = listecandidats;
  });
}


}

