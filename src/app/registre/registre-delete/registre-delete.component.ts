import { Component } from '@angular/core';
import { Users } from 'src/app/users';
import {RegistreServiceService} from 'src/app/registre-service.service';
@Component({
  selector: 'app-registre-delete',
  templateUrl: './registre-delete.component.html',
  styleUrls: ['./registre-delete.component.css']
})
export class RegistreDeleteComponent {
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
}
