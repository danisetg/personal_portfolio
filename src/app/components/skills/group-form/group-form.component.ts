import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  @Input() group: Group;
  @Output() submitEvent: EventEmitter<Group> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(!this.group)
      this.group = {};
  }

  onSubmit(group: Group) {
    this.submitEvent.emit(group);
  }

}
