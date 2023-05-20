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
}
