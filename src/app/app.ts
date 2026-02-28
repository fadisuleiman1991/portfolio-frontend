import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/cv/skills/skills";
import { Projects } from "./components/cv/projects/projects";
import { Contacts } from "./components/cv/contact/contact";
import { Footer } from "./components/footer/footer";
import { myCV } from './data/myCV';
import { Experiences } from "./components/cv/experiences/experiences";
import { Activities } from "./components/cv/activities/activities";
import { Languages } from "./components/cv/languages/languages";
import { OnlineProfiles } from "./components/cv/online-profiles/online-profiles";
import { Educations } from "./components/cv/educations/educations";
import { Trainings } from "./components/cv/trainings/trainings";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Contacts, Skills, Projects, Footer, Experiences, Activities, Languages, OnlineProfiles, Educations, Trainings, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly myCV = myCV;
}
