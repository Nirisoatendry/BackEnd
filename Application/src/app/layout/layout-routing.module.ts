import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from '../pages/formulaire/formulaire.component';
import { AfficheComponent } from './affiche/affiche.component';

const routes: Routes = [
  {
    path : 'Affiche',
    component : AfficheComponent
  },
  {
    path : 'Affiche/signUp',
    component : FormulaireComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
