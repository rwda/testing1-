import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponentForLab } from "./messages.lab.component";
import { MessageService } from "src/app/services/message/message.service";

describe("MessagesComponentForLab Integration Tests", () => {
  let component: MessagesComponentForLab;
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);

    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [
        { provide: MessageService, useValue: mockMessageService }
      ]
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;

    mockMessageService.messages = [];
  });

  it("should create MessagesComponentForLab", () => {
    expect(component).toBeTruthy();
  });

  it("should initially have an empty message template", () => {
    expect(component.messageService.messages.length).toBe(0);
  });

  it("should display messages in the template", () => {
    component.messageService.messages.push('message 1');
    component.messageService.messages.push('message 2');
    component.messageService.messages.push('message 3');
    fixture.detectChanges();

    const messageDiv = fixture.nativeElement.querySelectorAll('.msg');
    expect(messageDiv.length).toBe(3);
    expect(messageDiv[0].textContent).toContain('message 1');
    expect(messageDiv[1].textContent).toContain('message 2');
    expect(messageDiv[2].textContent).toContain('message 3');
  });
});
