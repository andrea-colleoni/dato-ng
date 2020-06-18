import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCompSubComponent } from './http-comp-sub.component';

describe('HttpCompSubComponent', () => {
  let component: HttpCompSubComponent;
  let fixture: ComponentFixture<HttpCompSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCompSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCompSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
