import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Data } from '../DTO/data.dto';
import { FormBuilder, Validators } from '@angular/forms';
import {
  getTotalResult,
  resultToPurposeSenseType,
  resultToSocialRelationType,
} from '../functions/getResults';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happines-form',
  templateUrl: './happines-form.component.html',
  styleUrls: ['./happines-form.component.scss'],
})
export class HappinesFormComponent {
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

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  onResultChange(newValue: any, type: string) {
    switch (type) {
      case 'user':
        this.data.user = newValue;
        break;
      case 'mentalHealth':
        this.data.mentalHealth = newValue;
        break;
      case 'emotionalHealth':
        this.data.emotionalHealth = newValue;
        break;
      case 'socialRelation':
        this.data.socialRelation = resultToSocialRelationType(newValue);
        break;
      case 'familyRelation':
        this.data.familyRelation = newValue;
        break;
      case 'purposeSense':
        this.data.purposeSense = resultToPurposeSenseType(newValue);
        break;
    }
  }

  isLastStep() {
    return this.lastStep;
  }

  finish() {
    console.log('Finalizado: ', this.data);

    let total = getTotalResult(this.data);
    this.router.navigate(['/happiness', Math.round(total)]);
  }

  textContinueButton(event: any) {
    const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
    this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
    this.lastStep = isLastStep ? true : false;
  }

  back() {}

  git() {}
}
