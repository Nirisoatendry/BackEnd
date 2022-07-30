import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FormulaireComponent,MainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    // MainComponent,
  ]
})
export class PagesModule { }
