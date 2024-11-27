import { Component,OnInit } from '@angular/core';
import { RegionService } from 'src/app/region.service';
import { Region } from 'src/app/region';

@Component({
  selector: 'app-region-create',
  templateUrl: './region-create.component.html',
  styleUrls: ['./region-create.component.css']
})
export class RegionCreateComponent implements OnInit{
  
  public nomReg: string;

  regions: Region[];
selectedRegion: Region = { code_Reg: null , nomReg: null}
constructor(private regionService: RegionService) {
  this.regionService.readRegion().subscribe((regions: Region[])=>{
  this.regions = regions;
  console.log(this.regions);
}) }
ngOnInit()
{
}
createOrUpdateRegion(form){
  form.value.code_Reg = this.selectedRegion.code_Reg;
  form.value.nomReg = this.selectedRegion.nomReg;

  
  
if (this.selectedRegion && this.selectedRegion.code_Reg ) {
  const code_Reg = this.selectedRegion.code_Reg ;
  const updatedRegion = form.value;
  this.regionService.updateRegion(code_Reg, updatedRegion).subscribe((region: Region) => {
    console.log(region);
    this.regionService.readRegion().subscribe((regions: Region[]) => {
    this.regions = regions;
    });
  });
  }
else{
  this.regionService.createRegion(form.value).subscribe((region: Region)=>{
    console.log("Product created", region);
    this.regionService.readRegion().subscribe((regions: Region[])=>{
      this.regions = regions;
    })
  });
}
}
private updateRegionsList() {
  this.regionService.readRegion().subscribe((regions: Region[]) => {
    this.regions = regions;
  });
}


}






