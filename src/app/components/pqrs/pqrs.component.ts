import { Component } from '@angular/core';
import { PqrsService } from './servicios/pqrs.service';

interface PQRS {
  tipo: string;
  descripcion: string;
  fecha: Date;
}

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent {
  tipo: string = '';
  descripcion: string = '';

  constructor(private pqrsService: PqrsService) { }

  enviarPQRS() {
    const nuevoPQRS: PQRS = {
      tipo: this.tipo,
      descripcion: this.descripcion,
      fecha: new Date()
    };

    this.pqrsService.agregarPQRS(nuevoPQRS);
    // Restablece el formulario
    this.tipo = '';
    this.descripcion = '';
  }
}
