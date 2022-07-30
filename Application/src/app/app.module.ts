import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http'; //Pour utiliser HttpClient
import {MatSliderModule} from '@angular/material/slider';
import { LayoutModule } from './layout/layout.module';
import {MatPaginatorModule} from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,  
    HttpClientModule, BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
