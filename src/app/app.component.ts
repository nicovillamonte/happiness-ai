import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SocialRelationType } from './DTO/socialRelation.dto';
import { resultToSocialRelationType } from './functions/getResults';

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
    }
  }

  textContinueButton(event: any) {
    const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
    this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
  }
}
