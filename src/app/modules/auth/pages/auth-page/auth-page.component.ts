import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{
  
  formLogin: FormGroup = new FormGroup({});
  /** En el constructor se hacen inyecciones 
   * lo que se coloca como alias puede ser lo que uno quiera
  */
  constructor(private /** este es el alias */ authService:AuthService) { }

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
  
  /** Función que se dispara cuando se da en el botón de enviar */
  sendLogin(): void {
    const {email, password} = this.formLogin.value
    
    this.authService.sendCredentials(email, password)
  }
}

