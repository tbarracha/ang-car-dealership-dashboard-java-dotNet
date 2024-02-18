import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTableEntryComponent } from './entity-table-entry.component';

describe('EntityTableEntryComponent', () => {
  let component: EntityTableEntryComponent;
  let fixture: ComponentFixture<EntityTableEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityTableEntryComponent]
    });
    fixture = TestBed.createComponent(EntityTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
