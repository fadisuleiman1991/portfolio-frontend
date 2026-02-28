import { Component } from '@angular/core';
import { myCV } from '../../data/myCV';

@Component({
  selector: 'app-cv-as-pdf',
  imports: [],
  templateUrl: './cv-as-pdf.html',
  styleUrl: './cv-as-pdf.scss',
})
export class CvAsPDF {
  protected readonly myCV = myCV;
}
