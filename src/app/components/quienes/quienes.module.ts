import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuienesComponent } from './quienes.component';
import { QuienesRoutingModule } from './quienes.routing.module';





@NgModule({
  declarations: [QuienesComponent],
  imports: [CommonModule, QuienesRoutingModule,FormsModule,],
  exports: [QuienesComponent]
})
export class QuienesModule { }
