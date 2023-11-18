import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MembresiaRoutingModule } from './membrsia.routing.module';
import { MembresiaComponent } from './membresia.component';
import { MembresiaaaaComponent } from './planes crear/planes-crear.comopent';





@NgModule({
  declarations: [MembresiaComponent,MembresiaaaaComponent],
  imports: [CommonModule, MembresiaRoutingModule,FormsModule,],
  exports: [MembresiaComponent]
})
export class PMembresiasModule { }
