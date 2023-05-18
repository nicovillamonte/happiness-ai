import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.scss'],
})
export class InitialDataComponent {
  @Input() result?: {
    name?: string;
    sex?: boolean;
    age?: number;
    MBI?: number;
    country?: string;
  };
  @Output() resultChange = new EventEmitter<{
    name: string;
    sex: boolean;
    age: number;
    MBI: number;
    country: string;
  }>();

  userData: any = {
    name: '',
    sex: false,
    age: '',
    MBI: 21,
    country: '',
  };

  onValueChange() {
    this.resultChange.emit(this.userData);
  }
}
