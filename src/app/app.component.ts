import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'happiness-ai';

  probando!: number;

  data = {
    mentalHealth: 0,
  };

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  prueba() {
    // console.log(this.data);
    console.log(this.probando);
  }

  onResultChange(newValue: number) {
    this.probando = newValue;
  }
}
