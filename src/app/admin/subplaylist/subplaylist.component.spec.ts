import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubplaylistComponent } from './subplaylist.component';

describe('SubplaylistComponent', () => {
  let component: SubplaylistComponent;
  let fixture: ComponentFixture<SubplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubplaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
