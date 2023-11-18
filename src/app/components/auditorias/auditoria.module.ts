import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditoriaComponent } from './auditoria.component';
import { FormsModule } from '@angular/forms';
import { AudiotoriaRoutingModule } from './auditoria.routing.module';
import { Component, OnInit } from '@angular/core';

@NgModule({
  declarations: [AuditoriaComponent],
  imports: [CommonModule, AudiotoriaRoutingModule,FormsModule,],
  exports: [AuditoriaComponent]
})
export class auditoria { }
