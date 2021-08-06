import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConfirmationComponent } from './message-confirmation.component';

describe('MessageConfirmationComponent', () => {
  let component: MessageConfirmationComponent;
  let fixture: ComponentFixture<MessageConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
