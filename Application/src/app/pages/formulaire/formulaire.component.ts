import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName}  from'@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  signUpForm = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    email : new FormControl(''),
    group : new FormControl(''),
    password: new FormControl(''),
    Password : new FormControl(''),
  })

  constructor(private register : AuthService) { }
  signUpUser() {
    this.register['sendData']('/register',this.signUpForm.value).subscribe((data: any)=>{
      
      console.log(data);
    })
   
  }
  ngOnInit(): void {
  }

}
