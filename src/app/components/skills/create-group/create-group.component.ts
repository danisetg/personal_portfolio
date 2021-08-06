import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/api/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor(
    private groupService: GroupService,
    public dialogRef: MatDialogRef<CreateGroupComponent>) {}

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  createGroup(group: Group) {
    this.groupService.create(group).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
