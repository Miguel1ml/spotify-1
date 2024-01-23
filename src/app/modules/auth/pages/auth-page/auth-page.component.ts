import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{
  
  formLogin: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email:new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password:new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]) 
      }    
    )
  }
  
  sendLogin(): void {
    const body = this.formLogin.value
    console.log('🖲️🖲️🖲️', body);
    
  }
}

