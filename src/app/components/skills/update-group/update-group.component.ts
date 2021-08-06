import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/api/group.service';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss']
})
export class UpdateGroupComponent implements OnInit {

  constructor(
    private groupService: GroupService,
    public dialogRef: MatDialogRef<UpdateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public group: Group) {}

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  updateGroup(group: Group) {
    group.id = this.group.id;
    this.groupService.update(group).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

}
