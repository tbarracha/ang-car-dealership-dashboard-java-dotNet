import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyFaceComponent } from './smiley-face.component';

describe('SmileyFaceComponent', () => {
  let component: SmileyFaceComponent;
  let fixture: ComponentFixture<SmileyFaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmileyFaceComponent]
    });
    fixture = TestBed.createComponent(SmileyFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
