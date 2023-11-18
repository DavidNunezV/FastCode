// components.module.ts
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { PortafolioModule } from './portfolio/portafolio.module';
import { QuienesComponent } from './quienes/quienes.component';
import { QuienesModule } from './quienes/quienes.module';
import { CrearCuentaComponent } from './home/crear-cuenta/crear-cuenta.component';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { PqrsModule } from './pqrs/pqrs.module';
import { auditoria } from './auditorias/auditoria.module';
import { PMembresiasModule } from './planes/membresia.module';

@NgModule({
  imports: [
    HomeModule,QuienesModule,PortafolioModule,ReactiveFormsModule,PqrsModule,auditoria,PMembresiasModule


  ],
  exports: [
    HomeModule,

  ]
})
export class ComponentsModule { }
