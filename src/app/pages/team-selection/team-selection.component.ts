import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  url: string;
  price: number;
}

@Component({
  selector: 'app-team-selection',
  imports: [],
  templateUrl: './team-selection.component.html',
  styleUrl: './team-selection.component.scss',
})
export class TeamSelectionComponent implements OnInit {
  categories = ['Collares', 'Anillos', 'Haoris', 'Figuras', 'Miscelaneos'];

  selectedCategory: Product[] = [];

  currentIndexCategory: number = 0;
  itemWidthCategory: number = 400;

  currentIndexProduct: number = 0;
  itemHeight: number = 180;

  rings = [
    {
      name: 'Anillo 1',
      url: '/products/anillo1.png',
      price: 100,
    },
    {
      name: 'Anillo 1',
      url: '/products/anillo1.png',
      price: 100,
    },
    {
      name: 'Anillo 1',
      url: '/products/anillo1.png',
      price: 100,
    },
  ];

  collars = [
    {
      name: 'Collar 1',
      url: '/products/collar1.png',
      price: 100,
    },
    {
      name: 'Collar 1',
      url: '/products/collar1.png',
      price: 100,
    },
    {
      name: 'Collar 1',
      url: '/products/collar1.png',
      price: 100,
    },
  ];

  haoris = [
    {
      name: 'Haori 1',
      url: '/products/haori1.png',
      price: 100,
    },
    {
      name: 'Haori 1',
      url: '/products/haori1.png',
      price: 100,
    },
    {
      name: 'Haori 1',
      url: '/products/haori1.png',
      price: 100,
    },
  ];
  ngOnInit() {
    //alert('team-selection works!');
    this.updateSelectedCategoryProducts(
      this.categories[this.currentIndexCategory]
    );
  }

  updateSelectedCategoryProducts(categoryName: string) {
    this.currentIndexProduct = 0; // Reiniciar el índice del carrusel de productos al cambiar de categoría
    switch (categoryName) {
      case 'Collares':
        this.selectedCategory = this.collars;
        break;
      case 'Anillos':
        this.selectedCategory = this.rings;
        break;
      case 'Haoris':
        this.selectedCategory = this.haoris;
        break;
      // Añadir más casos para 'Figuras', 'Miscelaneos', etc.
      default:
        this.selectedCategory = []; // Si no hay productos para la categoría
        break;
    }
  }

  prevItem() {
    if (this.currentIndexCategory > 0) {
      this.currentIndexCategory--;
    } else {
      // Opcional: Volver al final si llega al principio (carousel infinito)
      // this.currentIndexCategory = this.leagues.length - 1;
    }
  }

  nextItem() {
    if (this.currentIndexCategory < this.categories.length - 1) {
      this.currentIndexCategory++;
    } else {
      // Opcional: Volver al principio si llega al final (carousel infinito)
      // this.currentIndex = 0;
    }
  }

  prevTeam() {
    if (this.currentIndexProduct > 0) {
      this.currentIndexProduct--;
    } else {
      // Opcional: Volver al final si llega al principio (carousel infinito)
      // this.currentIndex = this.leagues.length - 1;
    }
  }

  nextTeam() {
    if (this.currentIndexProduct < this.categories.length - 1) {
      this.currentIndexProduct++;
    } else {
      // Opcional: Volver al principio si llega al final (carousel infinito)
      // this.currentIndex = 0;
    }
  }
}
