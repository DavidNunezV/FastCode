import { Component, OnInit } from '@angular/core';

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
export class PqrsComponent implements OnInit {
  listaPQRS: PQRS[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes cargar PQRS existentes si es necesario
  }

  enviarPQRS(tipo: string, descripcion: string) {
    const nuevaPQRS: PQRS = {
      tipo,
      descripcion,
      fecha: new Date()
    };
    this.listaPQRS.push(nuevaPQRS);
    // Aquí puedes agregar lógica para enviar la PQRS a un servidor o API
  }
}
