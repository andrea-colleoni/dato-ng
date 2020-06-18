import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAjaxComponent } from './info-ajax.component';

describe('InfoAjaxComponent', () => {
  let component: InfoAjaxComponent;
  let fixture: ComponentFixture<InfoAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
