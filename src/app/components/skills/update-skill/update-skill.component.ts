import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/api/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss']
})
export class UpdateSkillComponent implements OnInit {

  constructor(
    private skillService: SkillService,
    public dialogRef: MatDialogRef<UpdateSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public skill: Skill) {}

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  updateSkill(skill: Skill) {
    skill.id = this.skill.id;
    this.skillService.update(skill).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
