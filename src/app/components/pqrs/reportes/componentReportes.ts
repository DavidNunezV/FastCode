import { Component, OnInit } from '@angular/core';
import { PqrsService } from '../servicios/pqrs.service';

interface PQRS {
  tipo: string;
  descripcion: string;
  fecha: Date;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html'
})
export class ReportesComponent implements OnInit {
  listaPQRS: PQRS[] = [];

  constructor(private pqrsService: PqrsService) { }

  ngOnInit(): void {
    this.listaPQRS = this.pqrsService.obtenerPQRS();
    console.log('Reportes cargados:', this.listaPQRS);
  }

}
