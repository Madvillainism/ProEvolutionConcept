import { Component } from '@angular/core';

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
      description: '/home',
      image: '/assets/letras-mura.png',
    },
    {
      title: 'Mercancia',
      description: '/team-selection',
      image: '/assets/merca.png',
    },
    {
      title: 'Cosplay',
      description: '/navigation-menu',
      image: '/assets/cosplay.png',
    },
    {
      title: 'Events',
      description: '/home',
      image: '/assets/eventos.png',
    },
  ];
}
