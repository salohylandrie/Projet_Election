import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './election-login.component.html',
  styleUrls: ['./election-login.component.css']
})
export class ElectionLoginComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  errorMessage: string = ''; // Variable pour afficher le message d'erreur
  

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm) {
    this.submitted = true;
    if (this.angForm.invalid) {
      return;
    }

    this.dataService.userlogin(angForm.value.username, angForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data.length > 0) {
            // L'utilisateur a été trouvé et le mot de passe est correct
            const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard-election';
            this.router.navigate([redirect]);

          }
          
          
          
        },
        data=> {
          // L'utilisateur n'a pas été trouvé ou le mot de passe est incorrect
          this.errorMessage = "Username or password is incorrect";
         
        }
      );
  }

  get username() { return this.angForm.get('username'); }
  get password() { return this.angForm.get('password'); }
}