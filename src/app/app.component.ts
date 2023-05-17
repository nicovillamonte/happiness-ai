import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'happiness-ai';
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChildren('step') steps!: QueryList<any>;

  probando!: number;
  continueButtonText: string = 'Continuar';

  data: {
    mentalHealth?: number;
  } = {
    mentalHealth: undefined,
  };

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  onResultChange(newValue: number) {
    this.data.mentalHealth = newValue;
  }

  textContinueButton(event: any) {
    const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
    this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
  }
}
