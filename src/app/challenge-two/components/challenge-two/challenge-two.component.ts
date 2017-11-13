import {Component, Input, OnInit} from '@angular/core';
import {flatMap} from "tslint/lib/utils";

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.css'],
})
export class ChallengeTwoComponent implements OnInit {

  @Input() isActive = false;
  postCode = '';
  range = 1;

  constructor() { }

  ngOnInit() {
  }

  onRangeChange(ev) {
    this.range = ev.value;
  }
}
