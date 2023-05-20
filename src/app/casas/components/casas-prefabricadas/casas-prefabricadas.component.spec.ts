import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasPrefabricadasComponent } from './casas-prefabricadas.component';

describe('CasasPrefabricadasComponent', () => {
  let component: CasasPrefabricadasComponent;
  let fixture: ComponentFixture<CasasPrefabricadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasPrefabricadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasPrefabricadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
