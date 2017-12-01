import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.css'],
})
export class ChallengeTwoComponent implements OnChanges, AfterViewInit {

  @Input() isActive = false;
  postCode = '';
  range = 1;
  lat = null;
  lng = null;

  showPostCodeField = true;

  dialogRef: MatDialogRef<DialogComponent> = null;

  @ViewChild(NgModel) model: NgModel;

  constructor(public dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isActive && changes.isActive.currentValue === true) {
      setTimeout(() => {
        this.dialogRef = this.dialog.open(DialogComponent);
        this.dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.showPostCodeField = false;
            navigator.geolocation.getCurrentPosition((position) => {
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;
            });
          }
        });
      });
    }
  }

  ngAfterViewInit() {
    if (this.model) {
      this.model.valueChanges.subscribe((e) => {
        this.postCode = e.toUpperCase();
      });
    }
  }

  onRangeChange(ev) {
    this.range = ev.value;
  }
}
