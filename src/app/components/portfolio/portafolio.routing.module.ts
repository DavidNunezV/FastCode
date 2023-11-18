import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { ProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';
import { PortfolioComponentAdmin } from './portaadmin/portafolio.component';

const routes: Routes = [
  { path: 'portafolioadmin', component: PortfolioComponentAdmin,canActivate: [AuthGuard] },
  { path: 'portafolio', component: PortfolioComponent },
  { path: 'crear-proyecto', component: ProyectoComponent },
  { path: '', redirectTo: '/portafolio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
