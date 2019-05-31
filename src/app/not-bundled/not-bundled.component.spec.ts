import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotBundledComponent } from './not-bundled.component';

describe('NotBundledComponent', () => {
  let component: NotBundledComponent;
  let fixture: ComponentFixture<NotBundledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotBundledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotBundledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
