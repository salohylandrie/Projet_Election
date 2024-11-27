import { Component,OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import {RegistreServiceService} from 'src/app/registre-service.service';

@Component({
  selector: 'app-registre-create',
  templateUrl: './registre-create.component.html',
  styleUrls: ['./registre-create.component.css']
})
export class RegistreCreateComponent implements OnInit{

  userss: Users[];
	selectedElecteur: Users = { id: null , username: null, password: null, fokotany: null, commune: null, district: null, prefecture: null}
	constructor(private registreServiceService: RegistreServiceService) {
		this.registreServiceService.readUser().subscribe((userss: Users[])=>{
		this.userss = userss;
		console.log(this.userss);
	}) }
	ngOnInit()
	{
	}
	createOrUpdateUser(form){
		form.value.IdUser = this.selectedElecteur.id;
		form.value.username = this.selectedElecteur.username;
		form.value.password = this.selectedElecteur.password;
    form.value.fokotany = this.selectedElecteur.fokotany;
    form.value.commune = this.selectedElecteur.commune;
    form.value.district = this.selectedElecteur.district;
    form.value.prefecture = this.selectedElecteur.prefecture;
    
    
	if (this.selectedElecteur && this.selectedElecteur.id ) {
		const idcand = this.selectedElecteur.id ;
		const updatedElecteur = form.value;
		this.registreServiceService.updateUser(idcand, updatedElecteur).subscribe((users: Users) => {
		  console.log(users);
		  this.registreServiceService.readUser().subscribe((userss: Users[]) => {
			this.userss = userss;
		  });
		});
	  }
	else{
		this.registreServiceService.createUser(form.value).subscribe((users: Users)=>{
			console.log("Product created", users);
			this.registreServiceService.readUser().subscribe((userss: Users[])=>{
				this.userss = userss;
			})
		});
	}
}
private updateElecteursList() {
    this.registreServiceService.readUser().subscribe((userss: Users[]) => {
      this.userss = userss;
    });
  }

}
