import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'] // Utilisation de styleUrls
})
export class DeveloperComponent {
  developer: Developer;

  constructor() {
    const skills: Skill[] = [
      new Skill('PHP', 'https://cdn.worldvectorlogo.com/logos/php-1.svg', 'https://www.php.net/'),
      new Skill('JavaScript', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'),
      new Skill('Angular', 'https://thumbs.dreamstime.com/b/angular-logo-editorial-illustrative-white-background-angular-logo-editorial-illustrative-white-background-eps-download-208329119.jpg', 'https://angular.io/'),
    ];
    this.developer = new Developer('Michelas', 'Alexis', 25, 'Male', 'Learning Angular with Wild Code School', skills);
  }
}
