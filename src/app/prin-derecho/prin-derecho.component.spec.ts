import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinDerechoComponent } from './prin-derecho.component';

describe('PrinDerechoComponent', () => {
  let component: PrinDerechoComponent;
  let fixture: ComponentFixture<PrinDerechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinDerechoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
