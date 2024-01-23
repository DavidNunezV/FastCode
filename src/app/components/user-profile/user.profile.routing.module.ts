import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../home/crear-cuenta/service/AuthGuard.service';
import { UserProfileComponent } from './user.profile.component';


const routes: Routes = [
  { path: 'configuracion', component: UserProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PERFILRoutingModule { }
