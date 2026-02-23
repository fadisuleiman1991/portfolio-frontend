import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAsPDF } from './cv-as-pdf';

describe('CvAsPDF', () => {
  let component: CvAsPDF;
  let fixture: ComponentFixture<CvAsPDF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvAsPDF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvAsPDF);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
