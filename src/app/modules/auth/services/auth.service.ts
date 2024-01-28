import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

/**  Sin nada se entiende que es public */
  public sendCredentials(email: string, password: string): void {
    console.log('💻💻', email, password);
  }
}
