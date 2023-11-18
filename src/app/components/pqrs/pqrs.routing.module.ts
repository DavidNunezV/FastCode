import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';
import { PqrsComponent } from './pqrs.component';
const routes: Routes = [
  { path: 'pqrs', component: PqrsComponent,canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsRoutingModule { }
