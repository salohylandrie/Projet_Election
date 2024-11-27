import { Component, OnInit, ElementRef } from '@angular/core';
import { Bureau } from 'src/app/bureau';
import { BureauServiceService } from 'src/app/bureau-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bureau-list',
  templateUrl: './bureau-list.component.html',
  styleUrls: ['./bureau-list.component.css']
})
export class BureauListComponent implements OnInit {
  bureaux: Bureau[];
  searchTerm: string = '';
  searchResults: Bureau[] = [];
  status = false;
  addToggle()
  { 
    this.status = !this.status;       
  }
  selectedBureau: Bureau = {
    idBV: null,
    salleBV: null,
    nbElecInscri: null,
    nbVotant: null,
    nbVoteBl: null,
    nbVoteNul: null,
    suffrageExprime: null,
    nomFokt: null,
    code_Fokt: null,
    nomComm: null,nomDistr: null,nomReg: null,code_Comm: null,
    code_Distr: null, centreBV: null,
    
  
  };

  constructor(
    private bureauServiceService: BureauServiceService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.loadBureaux();
  }

  showDeleteModal(bureau: Bureau) {
    this.selectedBureau = bureau;
    const modal = this.elementRef.nativeElement.querySelector('#myModal');
    modal.style.display = 'block';
  }

  hideDeleteModal() {
    const modal = this.elementRef.nativeElement.querySelector('#myModal');
    modal.style.display = 'none';
  }

  editBureau(bureau: Bureau) {
    this.selectedBureau = { ...bureau };
    this.router.navigate(['/bureau-edit-route', bureau.idBV]);
  }

  viewBureauDetails(idBureau: number) {
    this.router.navigate(['/bureau-view-route', idBureau]);
  }

  deleteBureau(idBV) {
    console.log("Attempting to delete Bureau with ID: ", idBV);
    this.bureauServiceService.deleteBureau(idBV).subscribe(() => {
      console.log("Bureau deleted, ", idBV);
      this.bureaux = this.bureaux.filter((bureau) => bureau.idBV !== idBV);
    });
  }

  loadBureaux() {
    this.bureauServiceService.getBureaux().subscribe((bureaux: Bureau[]) => {
      this.bureaux = bureaux;
    });
  }

  searchBureau() {
    if (this.searchTerm.trim() !== '') {
      this.bureauServiceService.searchBureaux(this.searchTerm).subscribe((bureaux: Bureau[]) => {
        this.searchResults = bureaux;
      });
    } else {
      this.searchResults = null;
      this.loadBureaux();
    }
  }
}