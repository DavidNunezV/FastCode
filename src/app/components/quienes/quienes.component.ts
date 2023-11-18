import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent {
  teamMembers = [
    {
      name: 'Sebastián Dorado',
      description: 'Inmerso en su formación en Tecnología en Sistemas, Sebastián combina su curiosidad por lo digital con una perspectiva analítica, explorando constantemente innovaciones y avances en el panorama tecnológico.',
      imageUrl: 'assets/p2.jpg',
      expanded: false

    },
    {
      name: 'Camilo Guerrero',
      description: 'En plena formación en Tecnología en Sistemas, Camilo fusiona su amor por lo digital con un enfoque práctico y analítico, persiguiendo constantemente avances y soluciones vanguardistas en el mundo tecnológico.',
      imageUrl: 'assets/p1.jpg',
      showDescription: false

    },
    {
      name: 'Kevin Agudelo',
      description: 'En plena formación en Tecnología en Sistemas, Kevin fusiona su amor por lo digital con un enfoque práctico y analítico, persiguiendo constantemente avances y soluciones vanguardistas en el mundo tecnológico.',
      imageUrl: 'assets/p4.jpg',
      showDescription: false

    },
    {
      name: 'David Núñez',
      description: 'Estudiante de Tecnología en Sistemas, David es un apasionado del mundo digital con un enfoque analítico, siempre buscando soluciones innovadoras en el ámbito tecnológico.',
      imageUrl: 'assets/p3.jpg',
      showDescription: false

    }
  ];
  toggleDescription(index: number) {
    this.teamMembers[index].showDescription = !this.teamMembers[index].showDescription;
  }
}
