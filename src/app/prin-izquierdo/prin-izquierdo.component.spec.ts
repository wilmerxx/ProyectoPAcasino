import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinIzquierdoComponent } from './prin-izquierdo.component';

describe('PrinIzquierdoComponent', () => {
  let component: PrinIzquierdoComponent;
  let fixture: ComponentFixture<PrinIzquierdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinIzquierdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
