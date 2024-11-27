import { Component,OnInit } from '@angular/core';
import { Commune } from '../commune';
import { CommuneService } from '../commune.service';
import { District } from '../district';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-commune-create',
  templateUrl: './commune-create.component.html',
  styleUrls: ['./commune-create.component.css']
})
export class CommuneCreateComponent implements OnInit {
  communes: Commune[];
  selectedRegion: string = '';
  districts: District[];
  selectedCommune: Commune = { code_Distr: null, nomDistr: null, code_Comm: null, nomComm: null, nomReg: null,  code_Reg: null   };

  constructor(private communeService: CommuneService, private districtService: DistrictService) {
    this.communeService.readCommune().subscribe((communes: Commune[]) => {
      this.communes = communes;
    });

    this.districtService.readDistrict().subscribe((districts: District[]) => {
      this.districts = districts;
    });

    const code_Distr = sessionStorage.getItem('code_Distr');

    // Associez l'ID de l'utilisateur au bureau en cours de création
    this.selectedCommune.code_Distr = code_Distr;
  }

  ngOnInit() {}

  createOrUpdateCommune(form) {
    if (this.selectedCommune && this.selectedCommune.code_Comm) {
      const code_Comm = this.selectedCommune.code_Comm;
      const updatedCommune = {
        code_Comm:code_Comm,
        nomComm:form.value.nomComm, 
        code_Distr: form.value.code_Distr, 
        nomDistr: form.value.nomDistr,
        nomReg: form.value.nomDistr,
        code_Reg: form.value.code_Reg,
      };

      this.communeService.updateCommune(code_Comm, updatedCommune).subscribe((commune: Commune) => {
        console.log(commune);
        this.updateCommuneList(); // Mise à jour de la liste des districts après la modification
      });
    } else {
      this.communeService.createCommune(form.value).subscribe((commune: Commune) => {
        console.log("Commune created", commune);
        this.updateCommuneList(); // Mise à jour de la liste des districts après la création
      });
    }
  }

  private updateCommuneList() {
    this.communeService.readCommune().subscribe((communes: Commune[]) => {
      this.communes = communes;
    });
  }
  onDistrictSelection() {
    // Vous devrez récupérer le nomReg associé au district sélectionné en fonction de son nomDistr
    const selectedDistrict = this.districts.find(district => district.nomDistr === this.selectedCommune.nomDistr);
    if (selectedDistrict) {
      this.selectedRegion = selectedDistrict.nomReg;
    } else {
      this.selectedRegion = ''; // Réinitialisez la valeur si le district n'est pas trouvé
    }
  }

  }

