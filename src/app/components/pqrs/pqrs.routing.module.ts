import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';
import { PqrsComponent } from './pqrs.component';
import { ReportesComponent } from './reportes/componentReportes';

const routes: Routes = [
  { path: 'pqrs', component: PqrsComponent },
  { path: 'reportes', component: ReportesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsRoutingModule { }
