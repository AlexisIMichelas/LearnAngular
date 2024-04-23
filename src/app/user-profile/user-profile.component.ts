// user-profile.component.ts
import { Component } from '@angular/core';
import { User } from './user.interface';
// Import de l'interface User

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = { // Utilisation de l'interface User pour typer l'objet user
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  submittedQuote: string = '';

  ReadMore = true;

  hideAge() {
    this.ReadMore = !this.ReadMore;
  }

  submitForm() {
    this.submittedQuote = this.user.quote;
  }
}
