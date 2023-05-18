import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SocialRelationType } from './DTO/socialRelation.dto';
import {
  resultToPurposeSenseType,
  resultToSocialRelationType,
} from './functions/getResults';
import { PurposeSenseType } from './DTO/purposeSense.dto';

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
    user: {
      name?: string;
      sex?: boolean;
      age?: number;
      MBI?: number;
      country?: string;
    };
    mentalHealth?: number;
    emotionalHealth?: number;
    socialRelation?: SocialRelationType;
    familyRelation?: number;
    purposeSense?: PurposeSenseType;
  } = {
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

  textContinueButton(event: any) {
    const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
    this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
  }
}
