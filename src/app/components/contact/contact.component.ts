
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message: Message) {
    console.log(message);
  }
}
