import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user.profile.component';
import { PERFILRoutingModule } from './user.profile.routing.module';






@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, PERFILRoutingModule,FormsModule,],
  exports: [UserProfileComponent]
})
export class PerfilModule { }
