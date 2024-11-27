import { Component,OnInit } from '@angular/core';
import { Commune } from '../commune';
import { Fokotany } from '../fokotany';
import { CommuneService } from '../commune.service';
import { FokotanyService } from '../fokotany.service';

@Component({
  selector: 'app-fokotany-create',
  templateUrl: './fokotany-create.component.html',
  styleUrls: ['./fokotany-create.component.css']
})
export class FokotanyCreateComponent implements OnInit {
  communes: Commune[]; 
  selectedRegion: string = '';
  selectedistrict: string = '';

  fokotanys: Fokotany[];
  selectedFokotany: Fokotany = {
    code_Fokt: null,
    nomFokt: null,
    code_Comm: null,
    nomComm: null,
    nomDistr: null,
    nomReg: null,  
    code_Distr: null,
     
  };

  constructor(private fokotanyService: FokotanyService, private communeService: CommuneService) {
    this.fokotanyService.readFokotany().subscribe((fokotanys: Fokotany[]) => {
      this.fokotanys = fokotanys;
    });

    this.communeService.readCommune().subscribe((communes: Commune[]) => {
      this.communes = communes;
    });

    const code_Comm = sessionStorage.getItem('code_Comm');

    // Associez l'ID de l'utilisateur au fokotany en cours de création
    this.selectedFokotany.code_Comm = code_Comm;
  }

  ngOnInit() {}

  createOrUpdateFokotany(form) {
    if (this.selectedFokotany && this.selectedFokotany.code_Fokt) {
      const code_Fokt = this.selectedFokotany.code_Fokt;
      const updatedFokotany = {
        code_Comm: this.selectedFokotany.code_Comm,
        nomComm: form.value.nomComm,
        code_Fokt: form.value.code_Fokt,
        nomFokt: form.value.nomFokt,
        code_Distr: form.value.code_Distr,
        nomDistr: this.selectedistrict,
        nomReg: this.selectedRegion // Utilisez la région associée
      };

      this.fokotanyService.updateFokotany(code_Fokt, updatedFokotany).subscribe((fokotany: Fokotany) => {
        console.log(fokotany);
        this.updateFokotanyList();
      });
    } else {
      this.fokotanyService.createFokotany(form.value).subscribe((fokotany: Fokotany) => {
        console.log('Fokotany created', fokotany);
        this.updateFokotanyList();
      });
    }
  }

  private updateFokotanyList() {
    this.fokotanyService.readFokotany().subscribe((fokotanys: Fokotany[]) => {
      this.fokotanys = fokotanys;
    });
  }


  onDistrictSelection() {
    // Vous devrez récupérer le nomReg associé au district sélectionné en fonction de son nomDistr
    const selectedDistrict = this.communes.find((commune) => commune.nomComm === this.selectedFokotany.nomComm);
    if (selectedDistrict) {
      this.selectedRegion = selectedDistrict.nomReg;
      this.selectedistrict = selectedDistrict.nomDistr;
    } else {
      this.selectedRegion = '';
      this.selectedistrict = '';
      // Réinitialisez la valeur si le district n'est pas trouvé
    }
  }
}
