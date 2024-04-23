import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Liste des onomatopées</h1>
    <ul>
      <li *ngFor="let onomatopoeia of onomatopoeiaList">{{ onomatopoeia }}</li>
    </ul>
    <hr>
    <app-create-onomatopia (sendOnomatopiaToParent)="onReceiveNewOnomatopia($event)"></app-create-onomatopia>
  `
})
export class AppComponent {
  title = 'LearnAngular';
  
  onomatopoeiaList: string[] = ['Boom', 'Bang', 'Crash'];

  onReceiveNewOnomatopia(newOnomatopia: string) {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
