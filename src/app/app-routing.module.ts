import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {EmployeCreateComponent} from './election-create/election-create.component';
import {EmployeEditComponent} from './election-edit/election-edit.component';
import {EmployeListComponent} from './election-list/election-list.component';
import { ElectionComponent} from './election/election.component';
import { ElectionLoginComponent} from './election-login/election-login.component';

import {AuthguardGuard} from './authguard.guard';
import {ElecteurCreateComponent} from './candidat/candidat-create/candidat-create.component';
import { ElecteurListComponent} from './candidat/candidat-list/candidat-list.component';
import {ElecteurEditComponent} from './candidat/candidat-edit/candidat-edit.component';
import{ElecteurDeleteComponent} from './candidat/candidat-delete/candidat-delete.component';
import {ElecteurViewComponent} from './candidat/candidat-view/candidat-view.component';
import {RegistreListComponent} from './registre/registre-list/registre-list.component';
import {RegistreCreateComponent} from './registre/registre-create/registre-create.component';
import {RegistreEditComponent} from './registre/registre-edit/registre-edit.component';
import {RegistreViewComponent} from './registre/registre-view/registre-view.component';

import {BureauListComponent} from './bureau_de_vote/bureau-list/bureau-list.component';
import {BureauCreateComponent} from './bureau_de_vote/bureau-create/bureau-create.component';
import {BureauViewComponent} from './bureau_de_vote/bureau-view/bureau-view.component';
import { BureauEditComponent } from './bureau_de_vote/bureau-edit/bureau-edit.component';

import { RegionListComponent } from './region/region-list/region-list.component';
import { RegionCreateComponent } from './region/region-create/region-create.component';
import { RegionEditComponent } from './region-edit/region-edit.component';

import { DistrictListComponent } from './district/district-list/district-list.component';
import { DistrictCreateComponent } from './district/district-create/district-create.component';

import { CommuneCreateComponent } from './commune-create/commune-create.component';
import { CommuneListComponent } from './commune-list/commune-list.component';

import { FokotanyListComponent } from './fokotany-list/fokotany-list.component';
import { FokotanyCreateComponent } from './fokotany-create/fokotany-create.component';

import { EmplacementListComponent } from './emplacement-list/emplacement-list.component';

import { ListecandidatCreateComponent } from './listecandidat-create/listecandidat-create.component';
import { ListecandidatListComponent } from './listecandidat-list/listecandidat-list.component';
import { ListecandidatEditComponent } from './listecandidat-edit/listecandidat-edit.component';
import { ListecandDeleteComponent } from './listecand-delete/listecand-delete.component';

import { ElectionprCreateComponent } from './electionpr-create/electionpr-create.component';
import { ElectionprListComponent } from './electionpr-list/electionpr-list.component';

import { ResultatCandidatListComponent } from './resultat-candidat-list/resultat-candidat-list.component';
import { ResultatCandidatCreateComponent } from './resultat-candidat-create/resultat-candidat-create.component';

import { ResultaParBureauComponent } from './resulta-par-bureau/resulta-par-bureau.component';






const routes: Routes = [
  { path: '', component: ElectionLoginComponent},
  {path: 'create-election', component: EmployeCreateComponent},
  {path:'election-list', component: EmployeListComponent},
  {path:'election-edit/:id', component: EmployeEditComponent},
  {path: 'dashboard-election', component: ElectionComponent},

  {path: 'login-election', component: ElectionLoginComponent},
  {path: 'electeur-create-route', component: ElecteurCreateComponent},
  {path: 'electeur-view-route/:id', component: ElecteurViewComponent},
  {path: 'registre-list-route', component: RegistreListComponent},
  {path: 'electeur-edit-route/:id', component: ElecteurEditComponent},
  {path: 'electeur-list-route', component:  ElecteurListComponent},
  {path: 'registre-create-route', component:  RegistreCreateComponent},
 
  {path: 'registre-edit-route/:id', component:  RegistreEditComponent},
 
  {path: 'registre-view-route/:id', component:  RegistreViewComponent},


  {path: 'bureau-create-route', component:  BureauCreateComponent},
  {path: 'bureau-edit-route/:id', component:   BureauEditComponent},
 
  {path: 'bureau-view-route/:id', component:  BureauViewComponent},
  {path: 'bureau-list-route', component:  BureauListComponent},

  {path: 'region-list-route', component:  RegionListComponent},
  {path: 'region-create-route', component:  RegionCreateComponent},
  {path: 'region-edit-route/:id', component: RegionEditComponent},


   {path: 'district-list-route', component:  DistrictListComponent},
   {path: 'district-create-route', component:  DistrictCreateComponent},

   {path: 'commune-list-route', component: CommuneListComponent},
   {path: 'commune-create-route', component:  CommuneCreateComponent},


   {path: 'fokotany-list-route', component: FokotanyListComponent},
   {path: 'fokotany-create-route', component:  FokotanyCreateComponent},

   {path: 'emplacement-list-route', component: EmplacementListComponent},
   
 
   {path: 'listecandidat-list-route', component: ListecandidatListComponent},
   {path: 'listecandidat-create-route', component:  ListecandidatCreateComponent},
   {path: 'listecandidat-edit-route/:id', component: ListecandidatEditComponent},
   {path: 'listecandidat-delete-route/:id', component: ListecandDeleteComponent},

   {path: 'electionpr-create-route', component: ElectionprCreateComponent},

  {path: 'electionpr-list-route', component:  ElectionprListComponent},


  {path: 'resultatcand-create-route', component: ResultatCandidatCreateComponent},
  {path: 'resultatcand-list-route', component:  ResultatCandidatListComponent},

  {path: 'resultatcandparBV-list-route', component:  ResultaParBureauComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

