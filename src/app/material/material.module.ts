import { NgModule } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule, MatInputModule, MatSliderModule, GestureConfig } from '@angular/material';


@NgModule({
  imports: [
    MatTabsModule,
    MatInputModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatTabsModule,
    MatInputModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
})
export class MaterialModule { }
