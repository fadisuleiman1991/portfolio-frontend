import { Component, Input } from '@angular/core';
import { Project } from '../../data/CV';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @Input() projects: Project[] = [];
}
