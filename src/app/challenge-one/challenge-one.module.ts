import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { ChallengeOneComponent } from './components/challenge-one/challenge-one.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ChallengeOneComponent],
  exports: [ChallengeOneComponent],
})
export class ChallengeOneModule { }
