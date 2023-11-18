import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inico-login/inicio-login.component';
import { NovedadesComponent } from './Novedades/novedades.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';




@NgModule({
  declarations: [HomeComponent,InicioComponent,NovedadesComponent,CrearCuentaComponent],
  imports: [CommonModule, HomeRoutingModule,FormsModule,ReactiveFormsModule],
  exports: [HomeComponent]
})
export class HomeModule { }
