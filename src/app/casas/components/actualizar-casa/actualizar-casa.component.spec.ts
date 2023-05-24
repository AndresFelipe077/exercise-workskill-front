import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCasaComponent } from './actualizar-casa.component';

describe('ActualizarCasaComponent', () => {
  let component: ActualizarCasaComponent;
  let fixture: ComponentFixture<ActualizarCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
