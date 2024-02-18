import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelHeaderComponent } from './side-panel-header.component';

describe('SidePanelHeaderComponent', () => {
  let component: SidePanelHeaderComponent;
  let fixture: ComponentFixture<SidePanelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidePanelHeaderComponent]
    });
    fixture = TestBed.createComponent(SidePanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
