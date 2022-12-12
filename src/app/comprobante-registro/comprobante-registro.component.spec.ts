import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteRegistroComponent } from './comprobante-registro.component';

describe('ComprobanteRegistroComponent', () => {
  let component: ComprobanteRegistroComponent;
  let fixture: ComponentFixture<ComprobanteRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobanteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
