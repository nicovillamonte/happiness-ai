import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SocialRelationType } from './DTO/socialRelation.dto';
import {
  getTotalResult,
  resultToPurposeSenseType,
  resultToSocialRelationType,
} from './functions/getResults';
import { PurposeSenseType } from './DTO/purposeSense.dto';
import { Data } from './DTO/data.dto';

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
  lastStep!: boolean;

  data: Data = {
    user: {},
  };

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  onResultChange(newValue: any, type: string) {
    switch (type) {
      case 'user':
        this.data.user = newValue;
        console.log(this.data.user); // Comment
        break;
      case 'mentalHealth':
        this.data.mentalHealth = newValue;
        console.log(this.data.mentalHealth); // Comment
        break;
      case 'emotionalHealth':
        this.data.emotionalHealth = newValue;
        console.log(this.data.emotionalHealth); // Comment
        break;
      case 'socialRelation':
        this.data.socialRelation = resultToSocialRelationType(newValue);
        console.log(this.data.socialRelation); // Comment
        break;
      case 'familyRelation':
        this.data.familyRelation = newValue;
        console.log(this.data.familyRelation); // Comment
        break;
      case 'purposeSense':
        this.data.purposeSense = resultToPurposeSenseType(newValue);
        console.log(this.data.purposeSense); // Comment
        break;
    }
  }

  isLastStep() {
    return this.lastStep;
  }

  finish() {
    console.log('Finalizado: ', this.data);

    // TODO: Result
    let total = getTotalResult(
      this.data,
      39.783726008458174,
      [
        9.84990982, 4.8165206, -9.63803728, 9.92686583, -0.38900715,
        -0.23191042, 0.65613902, 0.10979604,
      ]
    );
    console.log('Total: ', total);
  }

  textContinueButton(event: any) {
    const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
    this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
    this.lastStep = isLastStep ? true : false;
  }
}
