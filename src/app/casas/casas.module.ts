import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasasRoutingModule } from './casas-routing.module';
import { CasasComponent } from './components/casas/casas.component';
import { CasasEcologicasComponent } from './components/casas-ecologicas/casas-ecologicas.component';
import { CasasFamiliarComponent } from './components/casas-familiar/casas-familiar.component';
import { CasasCabanasComponent } from './components/casas-cabanas/casas-cabanas.component';
import { CasasPrefabricadasComponent } from './components/casas-prefabricadas/casas-prefabricadas.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlquilarCasaComponent } from './components/alquilar-casa/alquilar-casa.component';
import { RouterLink } from '@angular/router';
import { MisCasasComponent } from './components/mis-casas/mis-casas.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

@NgModule({
  declarations: [
    CasasComponent,
    CasasEcologicasComponent,
    CasasFamiliarComponent,
    CasasCabanasComponent,
    CasasPrefabricadasComponent,
    AlquilarCasaComponent,
    MisCasasComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    CasasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  exports:[
    CasasModule,
  ]
})
export class CasasModule { }
