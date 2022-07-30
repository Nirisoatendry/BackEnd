import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AfficheComponent } from './affiche/affiche.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PagesModule } from '../pages/pages.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';

@NgModule({
  declarations: [
    PrincipalComponent,
    HeaderComponent,
    SidemenuComponent,
    AfficheComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    PagesModule,
    PagesRoutingModule,
  ]
})
export class LayoutModule { }
