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
  // @ViewChild('stepper') stepper!: MatStepper;
  // @ViewChildren('step') steps!: QueryList<any>;

  // probando!: number;
  // continueButtonText: string = 'Continuar';
  // lastStep!: boolean;

  // data: Data = {
  //   user: {},
  // };

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });

  // constructor(private _formBuilder: FormBuilder) {}

  // onResultChange(newValue: any, type: string) {
  //   switch (type) {
  //     case 'user':
  //       this.data.user = newValue;
  //       break;
  //     case 'mentalHealth':
  //       this.data.mentalHealth = newValue;
  //       break;
  //     case 'emotionalHealth':
  //       this.data.emotionalHealth = newValue;
  //       break;
  //     case 'socialRelation':
  //       this.data.socialRelation = resultToSocialRelationType(newValue);
  //       break;
  //     case 'familyRelation':
  //       this.data.familyRelation = newValue;
  //       break;
  //     case 'purposeSense':
  //       this.data.purposeSense = resultToPurposeSenseType(newValue);
  //       break;
  //   }
  // }

  // isLastStep() {
  //   return this.lastStep;
  // }

  // finish() {
  //   console.log('Finalizado: ', this.data);

  //   let total = getTotalResult(this.data);
  //   console.log('Total: ', total);
  // }

  // textContinueButton(event: any) {
  //   const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
  //   this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
  //   this.lastStep = isLastStep ? true : false;
  // }
}
