import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraCertComponent } from './gra-cert.component';

describe('GraCertComponent', () => {
  let component: GraCertComponent;
  let fixture: ComponentFixture<GraCertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
