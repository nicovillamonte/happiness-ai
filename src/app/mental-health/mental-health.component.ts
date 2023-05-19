import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getQuestionaryResult } from '../functions/getResults';
import { MentalHealth } from '../domain/MentalHealth';

@Component({
  selector: 'mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss', '../questionary.scss'],
})
export class MentalHealthComponent {
  @Input() result?: number;
  @Output() resultChange = new EventEmitter<number>();

  questionary = MentalHealth.getQuestionary();

  valueChanged() {
    try {
      let res: number = getQuestionaryResult(this.questionary);

      this.result = res;
      this.resultChange.emit(res);
    } catch (error) {}
  }
}
