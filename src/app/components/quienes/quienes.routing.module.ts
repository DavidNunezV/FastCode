import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesComponent } from './quienes.component';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';


const routes: Routes = [
  { path: 'quienes', component: QuienesComponent,canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuienesRoutingModule { }
