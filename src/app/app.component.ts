import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private name: string = 'Alexis';
  public title: string = `Bienvenue sur le site de ${this.name} ! `;
}
