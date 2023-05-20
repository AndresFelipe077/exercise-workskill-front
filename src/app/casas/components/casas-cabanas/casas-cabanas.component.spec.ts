import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasCabanasComponent } from './casas-cabanas.component';

describe('CasasCabanasComponent', () => {
  let component: CasasCabanasComponent;
  let fixture: ComponentFixture<CasasCabanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasCabanasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasCabanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
