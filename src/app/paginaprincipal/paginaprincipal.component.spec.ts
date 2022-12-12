import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprincipalComponent } from './paginaprincipal.component';

describe('PaginaprincipalComponent', () => {
  let component: PaginaprincipalComponent;
  let fixture: ComponentFixture<PaginaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
