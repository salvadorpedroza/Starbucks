import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CremaBatidaComponent } from './crema-batida.component';

describe('CremaBatidaComponent', () => {
  let component: CremaBatidaComponent;
  let fixture: ComponentFixture<CremaBatidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CremaBatidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CremaBatidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
