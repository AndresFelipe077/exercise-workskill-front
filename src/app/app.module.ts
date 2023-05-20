import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { IndexComponent } from './principal/components/index/index.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CasasComponent } from './casas/components/casas/casas.component';
import { AlquilarCasaComponent } from './casas/components/alquilar-casa/alquilar-casa.component';
import { CasasCabanasComponent } from './casas/components/casas-cabanas/casas-cabanas.component';
import { CasasEcologicasComponent } from './casas/components/casas-ecologicas/casas-ecologicas.component';
import { CasasPrefabricadasComponent } from './casas/components/casas-prefabricadas/casas-prefabricadas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    CasasComponent,
    AlquilarCasaComponent,
    CasasCabanasComponent,
    CasasEcologicasComponent,
    CasasEcologicasComponent,
    CasasPrefabricadasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
