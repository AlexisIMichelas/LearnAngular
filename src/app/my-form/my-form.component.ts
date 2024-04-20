import { Component } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})


export class MyFormComponent {

  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  };

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newOrder);
  }
}
