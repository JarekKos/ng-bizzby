import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  accessToLocation(val) {
    this.dialogRef.close(val);
  }

}
