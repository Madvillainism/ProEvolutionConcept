import { Routes } from '@angular/router';
import { TeamSelectionComponent } from './pages/team-selection/team-selection.component';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'team-selection',
    component: TeamSelectionComponent,
  },
  {
    path: 'navigation-menu',
    component: NavigationMenuComponent,
  },
];
