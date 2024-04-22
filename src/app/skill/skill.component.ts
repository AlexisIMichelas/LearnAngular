import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'] // Utilise styleUrls au lieu de styleUrl
})
export class SkillComponent {
  @Input() skill: Skill = new Skill('', '', '');

  constructor() { }

}
