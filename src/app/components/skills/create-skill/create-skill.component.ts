import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/models/group.model';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/api/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss']
})
export class CreateSkillComponent implements OnInit {

  constructor(
    private skillService: SkillService,
    public dialogRef: MatDialogRef<CreateSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public group: Group) {}

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createSkill(skill: Skill) {
    skill.group_id = this.group.id;
    this.skillService.create(skill).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

}
