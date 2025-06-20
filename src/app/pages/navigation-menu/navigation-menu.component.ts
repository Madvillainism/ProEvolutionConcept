import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  imports: [],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  options = [
    {
      title: 'Home',
      route: '/home',
      image: '/assets/background.png',
    },
    {
      title: 'Mercancia',
      route: '/team-selection',
      image: '/assets/merca.png',
    },
    {
      title: 'Cosplay',
      route: '/navigation-menu',
      image: '/assets/cosplay.png',
    },
    {
      title: 'Events',
      route: '/home',
      image: '/assets/eventos.png',
    },
  ];

  constructor(private router: Router) {}

  // funcion para navegar a las opciones
  navigateTo(option: string) {
    this.router.navigateByUrl(option);
  }
}
