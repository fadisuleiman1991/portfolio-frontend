import { Component } from '@angular/core';
import { CvAsPDF } from "../cv-as-pdf/cv-as-pdf";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-hero',
  imports: [CvAsPDF],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  async downloadPDF() {
    const pdf = await this.createPDF();
    pdf.save("Lebenslauf.pdf");

  }

  async openPDF() {
    const pdf = await this.createPDF();
    window.open(pdf.output('bloburl'), '_blank');

  }

  private async createPDF() {
    const element = document.getElementById('pdfContent')!;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // other pages
    while (heightLeft > 0) {

      position = heightLeft - imgHeight;

      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
    }

    return pdf;
  }
}
