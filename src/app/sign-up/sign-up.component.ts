import { Component } from '@angular/core';
import { User2 } from '../models/register.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  newUser: User2 = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  submitted: boolean = false;

  onSubmit(): void {
    // Traitement de la soumission du formulaire
    console.log(this.newUser);
    this.submitted = true;
  }
}
