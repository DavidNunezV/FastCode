import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InicioComponent } from './inico-login/inicio-login.component';
import { NovedadesComponent } from './Novedades/novedades.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { AuthGuard } from './crear-cuenta/service/AuthGuard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'create',
    data: { breadcrumb: 'Create' },
    component: InicioComponent
  },
  { path: 'cuenta', component: CrearCuentaComponent },

  { path: 'novedades', component: NovedadesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
