import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCasasComponent } from './gestionar-casas.component';

describe('GestionarCasasComponent', () => {
  let component: GestionarCasasComponent;
  let fixture: ComponentFixture<GestionarCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarCasasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
