import { Component, Input } from '@angular/core';
import { Contact, PersonalInformation } from '../../data/CV';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  @Input() personalInformation: PersonalInformation = {} as PersonalInformation;
  @Input() contact: Contact = {} as Contact;
}
