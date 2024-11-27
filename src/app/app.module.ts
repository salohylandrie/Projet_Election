import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import *as fr from '@angular/common/locales/fr';

import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { EmployeCreateComponent } from './election-create/election-create.component';
import { EmployeEditComponent } from './election-edit/election-edit.component';
import { EmployeListComponent } from './election-list/election-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ElectionComponent } from './election/election.component';
import { ElectionLoginComponent } from './election-login/election-login.component';

import { ApiService } from './api.service';
import { ElecteurServiceService} from './electeur-service.service';
import { ElecteurCreateComponent } from './candidat/candidat-create/candidat-create.component';
import { ElecteurEditComponent } from './candidat/candidat-edit/candidat-edit.component';
import { ElecteurListComponent } from './candidat/candidat-list/candidat-list.component';
import { ElecteurDeleteComponent } from './candidat/candidat-delete/candidat-delete.component';
import { ElecteurViewComponent } from './candidat/candidat-view/candidat-view.component';
import { RegistreCreateComponent } from './registre/registre-create/registre-create.component';
import { RegistreListComponent } from './registre/registre-list/registre-list.component';
import { RegistreDeleteComponent } from './registre/registre-delete/registre-delete.component';
import { RegistreEditComponent } from './registre/registre-edit/registre-edit.component';
import { RegistreViewComponent } from './registre/registre-view/registre-view.component';
import { BureauListComponent } from './bureau_de_vote/bureau-list/bureau-list.component';
import { BureauCreateComponent } from './bureau_de_vote/bureau-create/bureau-create.component';
import { BureauDeleteComponent } from './bureau_de_vote/bureau-delete/bureau-delete.component';
import { BureauViewComponent } from './bureau_de_vote/bureau-view/bureau-view.component';
import { BureauEditComponent } from './bureau_de_vote/bureau-edit/bureau-edit.component';
import { RegionCreateComponent } from './region/region-create/region-create.component';
import { RegionListComponent } from './region/region-list/region-list.component';
import { DistrictCreateComponent } from './district/district-create/district-create.component';
import { DistrictListComponent } from './district/district-list/district-list.component';
import { CommuneCreateComponent } from './commune-create/commune-create.component';
import { CommuneListComponent } from './commune-list/commune-list.component';
import { FokotanyCreateComponent } from './fokotany-create/fokotany-create.component';
import { FokotanyListComponent } from './fokotany-list/fokotany-list.component';
import { EmplacementListComponent } from './emplacement-list/emplacement-list.component';
import { ListecandidatListComponent } from './listecandidat-list/listecandidat-list.component';
import { ListecandidatCreateComponent } from './listecandidat-create/listecandidat-create.component';
import { RegionEditComponent } from './region-edit/region-edit.component';
import { ListecandidatEditComponent } from './listecandidat-edit/listecandidat-edit.component';
import { ListecandDeleteComponent } from './listecand-delete/listecand-delete.component';
import { ElectionprCreateComponent } from './electionpr-create/electionpr-create.component';
import { ElectionprListComponent } from './electionpr-list/electionpr-list.component';


import { ResultatCandidatCreateComponent } from './resultat-candidat-create/resultat-candidat-create.component';
import { ResultatCandidatListComponent } from './resultat-candidat-list/resultat-candidat-list.component';
import { ResultaParBureauComponent } from './resulta-par-bureau/resulta-par-bureau.component';






@NgModule({
    declarations: [
        AppComponent,
        EmployeCreateComponent,
        EmployeEditComponent,
        EmployeListComponent,
        ElectionComponent,
        ElectionLoginComponent,
       
        ElecteurCreateComponent,
        ElecteurEditComponent,
        ElecteurListComponent,
        ElecteurDeleteComponent,
        ElecteurViewComponent,
        RegistreCreateComponent,
        RegistreListComponent,
        RegistreDeleteComponent,
        RegistreEditComponent,
        RegistreViewComponent,
        BureauListComponent,
        BureauCreateComponent,
        BureauDeleteComponent,
        BureauViewComponent,
        BureauEditComponent,
        RegionCreateComponent,
        RegionListComponent,
        DistrictCreateComponent,
        DistrictListComponent,
        CommuneCreateComponent,
        CommuneListComponent,
        FokotanyCreateComponent,
        FokotanyListComponent,
        EmplacementListComponent,
        ListecandidatListComponent,
        ListecandidatCreateComponent,
        RegionEditComponent,
        ListecandidatEditComponent,
        ListecandDeleteComponent,
        ElectionprCreateComponent,
        ElectionprListComponent,
     ResultatCandidatCreateComponent,
     ResultatCandidatListComponent,
     ResultaParBureauComponent,
     
     
       
        

        
    ],
    providers: [
       
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
       
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
       
    ]
})
export class AppModule {
    
}
