import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaggiRabbitComponent } from './messaggi-rabbit.component';

describe('MessaggiRabbitComponent', () => {
  let component: MessaggiRabbitComponent;
  let fixture: ComponentFixture<MessaggiRabbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessaggiRabbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaggiRabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
