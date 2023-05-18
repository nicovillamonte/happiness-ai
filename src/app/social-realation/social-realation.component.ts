import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getResult } from '../functions/getResults';
import { SocialRelation } from '../domain/SocialRelation';

@Component({
  selector: 'social-realation',
  templateUrl: './social-realation.component.html',
  styleUrls: ['./social-realation.component.scss', '../questionary.scss'],
})
export class SocialRealationComponent {
  @Input() result?: number;
  @Output() resultChange = new EventEmitter<number>();

  questionary = SocialRelation.getQuestionary();

  valueChanged() {
    try {
      let res: number = getResult(this.questionary);

      this.result = res;
      this.resultChange.emit(res);
    } catch (error) {}
  }
}
