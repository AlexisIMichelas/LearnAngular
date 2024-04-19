import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


export const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' }, // Default route to user profile
  { path: 'sign-up', component: MenuComponent },
  { path: 'user', component: MenuComponent },
];
