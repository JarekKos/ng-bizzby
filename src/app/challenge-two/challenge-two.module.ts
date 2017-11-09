import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { ChallengeTwoComponent } from './components/challenge-two/challenge-two.component';
import { GMapComponent } from './components/g-map/g-map.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [ChallengeTwoComponent, GMapComponent],
  exports: [ChallengeTwoComponent]
})
export class ChallengeTwoModule { }
