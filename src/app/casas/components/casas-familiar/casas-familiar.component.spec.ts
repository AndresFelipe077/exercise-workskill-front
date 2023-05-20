import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasFamiliarComponent } from './casas-familiar.component';

describe('CasasFamiliarComponent', () => {
  let component: CasasFamiliarComponent;
  let fixture: ComponentFixture<CasasFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasFamiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
