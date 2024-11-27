import { Component,OnInit } from '@angular/core';
import { District } from 'src/app/district';
import { DistrictService } from 'src/app/district.service';
import { Region } from 'src/app/region';
import { RegionService } from 'src/app/region.service';

@Component({
  selector: 'app-district-create',
  templateUrl: './district-create.component.html',
  styleUrls: ['./district-create.component.css']
})
export class DistrictCreateComponent  implements OnInit {
  districts: District[];
  regions: Region[];
  selectedDistrict: District = { code_Distr: null, nomDistr: null, code_Reg: null, nomReg: null };

  constructor(private districtService: DistrictService, private regionService: RegionService) {
    this.districtService.readDistrict().subscribe((districts: District[]) => {
      this.districts = districts;
    });

    this.regionService.readRegion().subscribe((regions: Region[]) => {
      this.regions = regions;
    });

    const code_Reg = sessionStorage.getItem('code_Reg');

    
    this.selectedDistrict.code_Reg = code_Reg;
  }

  ngOnInit() {}

  createOrUpdateDistrict(form) {
    if (this.selectedDistrict && this.selectedDistrict.code_Distr) {
      const code_Distr = this.selectedDistrict.code_Distr;
      const updatedDistrict = {
        code_Distr: code_Distr,
        nomDistr: form.value.nomDistr, 
        code_Reg: form.value.code_Reg, 
        nomReg: form.value.nomReg,
      };

      this.districtService.updateDistrict(code_Distr, updatedDistrict).subscribe((district: District) => {
        console.log(district);
        this.updateDistrictList(); // Mise à jour de la liste des districts après la modification
      });
    } else {
      this.districtService.createDistrict(form.value).subscribe((district: District) => {
        console.log("District created", district);
        this.updateDistrictList(); // Mise à jour de la liste des districts après la création
      });
    }
  }

  private updateDistrictList() {
    this.districtService.readDistrict().subscribe((districts: District[]) => {
      this.districts = districts;
    });
  }
}
