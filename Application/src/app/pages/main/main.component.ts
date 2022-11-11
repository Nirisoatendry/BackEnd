import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public valide = false;

    loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  })
  // loginForm = this.fb.group

  constructor(private Auth : AuthService,private route : Router,private fb: FormBuilder) { }
  
  loginUser() {
    this.Auth['sendData']('/login',this.loginForm.value).subscribe((data: { success: any; })=>{
      if(data.success){
        this.route.navigateByUrl("Affiche");
      }else{
        this.valide = true;
      }
      console.log(data)
    }); 
  }
  
  
  ngOnInit(): void {
  }
}



