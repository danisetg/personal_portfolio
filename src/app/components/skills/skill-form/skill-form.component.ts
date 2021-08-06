import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
  @Input() skill: Skill;
  @Output() submitEvent: EventEmitter<Skill> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(!this.skill)
      this.skill = {};
  }

  onSubmit(skill: Skill) {
    this.submitEvent.emit(skill);
  }

}
