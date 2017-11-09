import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-challenge-one',
  templateUrl: './challenge-one.component.html',
  styleUrls: ['./challenge-one.component.css'],
})
export class ChallengeOneComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.form = this.fb.group({
      propertiesNumber: [10, [Validators.required, Validators.min(10), Validators.max(150)]],
      costPerProperty: ['', [Validators.required]],
      commission: [10, [Validators.required, Validators.min(1), Validators.max(100)]],
    });
  }

  onPropNumberChange(ev) {
    this.form.get('propertiesNumber').setValue(ev.value);
  }

  get annualIncome() {
    const propertiesNumber = parseInt(this.form.get('propertiesNumber').value, 10);
    const costPerProperty = parseFloat(this.form.get('costPerProperty').value);
    const commission = parseFloat(this.form.get('commission').value);
    return  propertiesNumber * costPerProperty * (commission / 100);
  }

  get annualIncomeFormatted() {
    return this.annualIncome.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  get monthIncome() {
    return this.annualIncome / 12;
  }

  get monthIncomeFormatted() {
    return this.monthIncome.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

}
