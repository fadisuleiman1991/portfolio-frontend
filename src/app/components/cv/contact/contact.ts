import { Component, Input } from '@angular/core';
import { Contact, PersonalInformation } from '../../../data/CV';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contacts {
  @Input() personalInformation: PersonalInformation = {} as PersonalInformation;
  @Input() contact: Contact = {} as Contact;
}
