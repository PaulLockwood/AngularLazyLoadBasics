import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerXyzzyComponent } from './customer-xyzzy.component';

describe('CustomerXyzzyComponent', () => {
  let component: CustomerXyzzyComponent;
  let fixture: ComponentFixture<CustomerXyzzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerXyzzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerXyzzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
