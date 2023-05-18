import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PurposeSense } from '../domain/PurpouseSense';
import { getInventaryResult } from '../functions/getResults';

@Component({
  selector: 'purpose-sense',
  templateUrl: './purpose-sense.component.html',
  styleUrls: ['./purpose-sense.component.scss'],
})
export class PurposeSenseComponent {
  @Input() result?: number;
  @Output() resultChange = new EventEmitter<number>();

  questionary = PurposeSense.getInventary();

  valueChanged() {
    // try {
    //   this.result = getInventaryResult(this.questionary);
    //   this.resultChange.emit(this.result);
    // } catch (error) {}
  }
}
