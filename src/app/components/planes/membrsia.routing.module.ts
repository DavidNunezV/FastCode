import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';
import { MembresiaComponent } from './membresia.component';
import { MembresiaaaaComponent } from './planes crear/planes-crear.comopent';


const routes: Routes = [
  { path: 'membressias', component: MembresiaComponent },
  { path: 'crear-membresias', component: MembresiaaaaComponent,canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresiaRoutingModule { }
