import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortafolioRoutingModule } from './portafolio.routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { PortfolioComponentAdmin } from './portaadmin/portafolio.component';




@NgModule({
  declarations: [PortfolioComponent,ProyectoComponent,PortfolioComponentAdmin],
  imports: [CommonModule, PortafolioRoutingModule,FormsModule,],
  exports: [PortfolioComponent]
})
export class PortafolioModule { }
