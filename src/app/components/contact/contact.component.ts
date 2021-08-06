
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmationComponent } from 'src/app/dialogs/message-confirmation/message-confirmation.component';
import { Message } from 'src/app/models/message.model';
import { ContactService } from 'src/app/services/api/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sendMessage(message: Message) {
    this.contactService.create(message).subscribe(res => {
        this.dialog.open(MessageConfirmationComponent);
    });
  }
}
