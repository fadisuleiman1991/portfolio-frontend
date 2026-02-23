import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { myCV } from './data/myCV';
import { CvAsPDF } from "./components/cv-as-pdf/cv-as-pdf";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About, Skills, Projects, Contact, Footer, CvAsPDF],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly myCV = myCV;
}
