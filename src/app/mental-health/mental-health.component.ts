import { Component, Output, EventEmitter } from '@angular/core';
import {
  MentalHealth,
  MentalHealthAnswerDTO,
  getMentalHealthResult,
} from '../DTO/mental-health.dto';

@Component({
  selector: 'mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss'],
})
export class MentalHealthComponent {
  @Output() result = new EventEmitter<number>();

  questionary = new MentalHealth().getQuestionary();

  constructor() {
    console.log(this.questionary);
  }

  valueChanged() {
    try {
      let res = getMentalHealthResult(this.questionary);
      this.result.emit(res);
    } catch (error) {}
  }
}
