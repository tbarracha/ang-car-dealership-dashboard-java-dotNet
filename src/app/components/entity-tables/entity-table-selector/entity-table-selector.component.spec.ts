import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTableSelectorComponent } from './entity-table-selector.component';

describe('EntityTableSelectorComponent', () => {
  let component: EntityTableSelectorComponent;
  let fixture: ComponentFixture<EntityTableSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityTableSelectorComponent]
    });
    fixture = TestBed.createComponent(EntityTableSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
