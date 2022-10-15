import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthSocketComponent } from './form-auth-socket.component';

describe('FormAuthSocketComponent', () => {
  let component: FormAuthSocketComponent;
  let fixture: ComponentFixture<FormAuthSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthSocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
