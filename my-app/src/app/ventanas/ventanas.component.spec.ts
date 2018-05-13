import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ventanasComponent } from './ventanas.component';

describe('ventanasComponent', () => {
  let component: ventanasComponent;
  let fixture: ComponentFixture<ventanasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ventanasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ventanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
