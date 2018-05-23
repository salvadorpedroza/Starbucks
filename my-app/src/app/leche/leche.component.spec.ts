import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecheComponent } from './leche.component';

describe('LecheComponent', () => {
  let component: LecheComponent;
  let fixture: ComponentFixture<LecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
