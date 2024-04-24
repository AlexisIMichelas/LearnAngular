import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewUser } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    street: new FormControl(''),
    postalCode: new FormControl(''),
    city: new FormControl('')
  });

  newUser: NewUser | undefined;

  onSubmit() {
    this.newUser = {
      username: this.userForm.get('username')!.value as string, // Assertion de type
      email: this.userForm.get('email')!.value as string, // Assertion de type
      password: this.userForm.get('password')!.value as string, // Assertion de type
      street: this.userForm.get('street')!.value as string, // Assertion de type
      postalCode: this.userForm.get('postalCode')!.value as string, // Assertion de type
      city: this.userForm.get('city')!.value as string // Assertion de type
    };
  }
}
