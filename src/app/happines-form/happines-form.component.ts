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
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

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
    let total = getTotalResult(this.data);
    if (isNaN(total) || total == null || total == undefined) {
      this.errorSnackBar();
      throw Error('Todos los campos son obligatorios.');
    }
    this.router.navigate(['/happiness', Math.round(total)]);
  }

  textContinueButton(event: any) {
    const isLastStep = event.selectedIndex === this.stepper.steps.length - 1;
    this.continueButtonText = isLastStep ? 'Finalizar' : 'Continuar';
    this.lastStep = isLastStep ? true : false;
  }

  errorSnackBar() {
    //error snackbar
    this.snackBar.open('Todos los campos son obligatorios.', 'De acuerdo', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
