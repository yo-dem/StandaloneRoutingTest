import { Routes } from '@angular/router';
import { MainShellComponent } from './main-shell.component';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';

export const mainShellRoutes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
];
