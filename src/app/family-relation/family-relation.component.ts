import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FamilyRelation } from '../domain/FamilyRelation';
import { getInventaryResult } from '../functions/getResults';

@Component({
  selector: 'family-relation',
  templateUrl: './family-relation.component.html',
  styleUrls: ['./family-relation.component.scss'],
})
export class FamilyRelationComponent {
  @Input() result?: number;
  @Output() resultChange = new EventEmitter<number>();

  questionary = FamilyRelation.getQuestionary();

  valueChanged() {
    try {
      this.result = getInventaryResult(this.questionary);
      this.resultChange.emit(this.result);
    } catch (error) {}
  }
}
