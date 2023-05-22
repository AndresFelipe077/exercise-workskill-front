import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PrincipalModule } from './principal/principal.module';
import { IndexComponent } from './principal/components/index/index.component';
import { CasasComponent } from './casas/components/casas/casas.component';
import { AlquilarCasaComponent } from './casas/components/alquilar-casa/alquilar-casa.component';
import { CasasCabanasComponent } from './casas/components/casas-cabanas/casas-cabanas.component';
import { CasasEcologicasComponent } from './casas/components/casas-ecologicas/casas-ecologicas.component';
import { CasasFamiliarComponent } from './casas/components/casas-familiar/casas-familiar.component';
import { CasasPrefabricadasComponent } from './casas/components/casas-prefabricadas/casas-prefabricadas.component';
import { UserProfileComponent } from './auth/components/user-profile/user-profile.component';
import { GestionarCasasComponent } from './admin/components/gestionar-casas/gestionar-casas.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'profile', component: UserProfileComponent },
  
  { path: 'casas', component: CasasComponent },

  { path: 'alquilar-casa/:id', component:AlquilarCasaComponent },

  { path: 'cabañas', component:CasasCabanasComponent},

  { path: 'casas-ecologicas', component:CasasEcologicasComponent},

  { path: 'casas-familiares', component:CasasFamiliarComponent},

  { path: 'casas-prefabricadas', component:CasasPrefabricadasComponent},

  { path: 'gestionar-casas', component: GestionarCasasComponent },

  { path: '', component: IndexComponent },
  { path: '**', component: IndexComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
