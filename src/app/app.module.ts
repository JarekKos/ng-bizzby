import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import {ChallengeOneModule} from './challenge-one/challenge-one.module';
import { ChallengeTwoModule } from './challenge-two/challenge-two.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ChallengeOneModule,
    ChallengeTwoModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
