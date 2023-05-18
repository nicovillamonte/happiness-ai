import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmotionalHealth } from '../domain/EmotionalHealth';
import { getQuestionaryResult } from '../functions/getResults';

@Component({
  selector: 'emotional-health',
  templateUrl: './emotional-health.component.html',
  styleUrls: ['./emotional-health.component.scss', '../questionary.scss'],
})
export class EmotionalHealthComponent {
  @Input() result?: number;
  @Output() resultChange = new EventEmitter<number>();

  questionary = EmotionalHealth.getQuestionary();

  valueChanged() {
    try {
      let res: number = getQuestionaryResult(this.questionary);

      this.result = res;
      this.resultChange.emit(res);
    } catch (error) {}
  }
}
