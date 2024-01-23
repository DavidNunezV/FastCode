import { Injectable } from '@angular/core';

interface PQRS {
  tipo: string;
  descripcion: string;
  fecha: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  private listaPQRS: PQRS[] = [];

  constructor() { }

  agregarPQRS(pqrs: PQRS) {
    console.log('Agregando PQRS:', pqrs);
    this.listaPQRS.push(pqrs);
  }

  obtenerPQRS(): PQRS[] {
    console.log('Obteniendo PQRS');
    return this.listaPQRS;
  }

}
