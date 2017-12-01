import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { MaterialModule } from '../material/material.module';
import { MatDialogModule } from '@angular/material/dialog';

import { ChallengeTwoComponent } from './components/challenge-two/challenge-two.component';
import { GMapComponent } from './components/g-map/g-map.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChg8OYibqpPLzVyUpyDIQm9byG6Wx2hNY'
    }),
    CommonModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
  ],
  declarations: [ChallengeTwoComponent, GMapComponent, DialogComponent],
  exports: [ChallengeTwoComponent],
  entryComponents: [DialogComponent],
})
export class ChallengeTwoModule { }
