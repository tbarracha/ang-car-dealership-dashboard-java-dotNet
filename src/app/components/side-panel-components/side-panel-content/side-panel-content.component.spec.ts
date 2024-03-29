import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelContentComponent } from './side-panel-content.component';

describe('SidePanelContentComponent', () => {
  let component: SidePanelContentComponent;
  let fixture: ComponentFixture<SidePanelContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidePanelContentComponent]
    });
    fixture = TestBed.createComponent(SidePanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
