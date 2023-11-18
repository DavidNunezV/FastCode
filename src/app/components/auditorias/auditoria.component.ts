import { Component, OnInit } from '@angular/core';

interface RegistroAuditoria {
  usuario: string;
  accion: string;
  fecha: Date;
}

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit {
  registros: RegistroAuditoria[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simulación de registros de auditoría (deberás reemplazar estos datos con datos reales)
    this.registros = [
      {
        usuario: 'usuario1',
        accion: 'Inicio de sesión',
        fecha: new Date('2023-11-01T08:00:00')
      },
      {
        usuario: 'usuario2',
        accion: 'Creación de un nuevo documento',
        fecha: new Date('2023-11-02T10:30:00')
      },
      {
        usuario: 'usuario3',
        accion: 'Modificación de configuración',
        fecha: new Date('2023-11-03T15:45:00')
      },
      {
        usuario: 'usuario4',
        accion: 'Modificación de configuración',
        fecha: new Date('2023-11-03T15:45:00')
      },   {
        usuario: 'usuario5',
        accion: 'Modificación de configuración',
        fecha: new Date('2023-11-03T15:45:00')
      },
      {
        usuario: 'usuario6',
        accion: 'Modificación de configuración',
        fecha: new Date('2023-11-03T15:45:00')
      }
    ];
  }
  descargarRegistros() {
    const csvData = this.registros.map(registro => ({
      Usuario: registro.usuario,
      Acción: registro.accion,
      Fecha: registro.fecha.toISOString() // Formatea la fecha como ISO
    }));

    const csv = [
      'Usuario,Acción,Fecha',
      ...csvData.map(row => `${row.Usuario},${row.Acción},${row.Fecha}`)
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'registros_de_auditoria.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
