import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PqrsComponent } from './pqrs.component';
import { PqrsRoutingModule } from './pqrs.routing.module';
PqrsRoutingModule




@NgModule({
  declarations: [PqrsComponent],
  imports: [CommonModule, PqrsRoutingModule,FormsModule,],
  exports: [PqrsComponent]
})
export class QuienesModule { }
