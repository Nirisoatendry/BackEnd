import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { user } from 'src/app/shared/models/model';
import { User } from './UserData';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit,AfterViewInit{
  columnsToDisplay : any;
   Utilisateur! :user [];
  dataSource! : MatTableDataSource <user>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }
  ngAfterViewInit(): void {
    this .dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.columnsToDisplay = ['Lastname', 'Firstname' , 'email','group'];
    this.Utilisateur = User ;
    this.dataSource = new MatTableDataSource<user>(this.Utilisateur);
    
  }

}
