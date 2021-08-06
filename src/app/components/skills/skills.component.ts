import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from 'src/app/dialogs/delete-confirmation/delete-confirmation.component';
import { Group } from 'src/app/models/group.model';
import { Skill } from 'src/app/models/skill.model';
import { GroupService } from 'src/app/services/api/group.service';
import { SkillService } from 'src/app/services/api/skill.service';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { UpdateSkillComponent } from './update-skill/update-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  groups: Group[];
  loading: boolean;
  constructor(private groupService: GroupService,
              private skillService: SkillService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.loading = true;
    this.groupService.index().subscribe(groups => {
        this.groups = groups;
        this.loading = false;
    });
  }

  createSkill(group: Group) {
    this.dialog.open(CreateSkillComponent, {data: group}).afterClosed().subscribe(result => {
      if(result)
        this.getSkills();
    });
  }

  updateSkill(skill: Skill) {
    this.dialog.open(UpdateSkillComponent, {data: skill}).afterClosed().subscribe(result => {
      if(result)
        this.getSkills();
    });
  }

  onDeleteSkill(skill: Skill) {
    this.dialog.open(DeleteConfirmationComponent).afterClosed().subscribe(result => {
      if(result) {
        this.skillService.delete(skill.id).subscribe( () => {
          this.getSkills();
        });
      }
    });
  }

  createGroup() {
    this.dialog.open(CreateGroupComponent).afterClosed().subscribe(result => {
      if(result)
        this.getSkills();
    });
  }

  updateGroup(group: Group) {
    this.dialog.open(UpdateGroupComponent, {data: group}).afterClosed().subscribe(result => {
      if(result)
        this.getSkills();
    });
  }

  onDeleteGroup(group: Group) {
    this.dialog.open(DeleteConfirmationComponent).afterClosed().subscribe(result => {
      if(result) {
        this.groupService.delete(group.id).subscribe( () => {
          this.getSkills();
        });
      }
    });
  }

}
