import { Component, Input } from '@angular/core';
import { Skill } from '../../data/CV';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @Input() skills: Skill[] = [];
}
