import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SkillService } from 'src/app/services/api/skill.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(
    private skillService: SkillService,
    public dialogRef: MatDialogRef<DeleteConfirmationComponent>) {}

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAccept() {
    this.dialogRef.close(true);
  }
}
