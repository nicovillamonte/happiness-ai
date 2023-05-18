import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { InitialDataComponent } from './initial-data/initial-data.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { EmotionalHealthComponent } from './emotional-health/emotional-health.component';

@NgModule({
  declarations: [AppComponent, InitialDataComponent, MentalHealthComponent, EmotionalHealthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    CdkStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
