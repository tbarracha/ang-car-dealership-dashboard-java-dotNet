import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTableViewerComponent } from './entity-table-viewer.component';

describe('EntityTableViewerComponent', () => {
  let component: EntityTableViewerComponent;
  let fixture: ComponentFixture<EntityTableViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityTableViewerComponent]
    });
    fixture = TestBed.createComponent(EntityTableViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
