import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasEcologicasComponent } from './casas-ecologicas.component';

describe('CasasEcologicasComponent', () => {
  let component: CasasEcologicasComponent;
  let fixture: ComponentFixture<CasasEcologicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasEcologicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasEcologicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
