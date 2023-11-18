import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';
import { AuditoriaComponent } from './auditoria.component';

const routes: Routes = [
  { path: 'auditoria', component: AuditoriaComponent,canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiotoriaRoutingModule { }
