import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelViewComponent } from './side-panel-view.component';

describe('SidePanelViewComponent', () => {
  let component: SidePanelViewComponent;
  let fixture: ComponentFixture<SidePanelViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidePanelViewComponent]
    });
    fixture = TestBed.createComponent(SidePanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
