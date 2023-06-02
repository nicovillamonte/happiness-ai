import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-happiness-result',
  templateUrl: './happiness-result.component.html',
  styleUrls: ['./happiness-result.component.scss'],
})
export class HappinessResultComponent {
  result = this.route.snapshot.paramMap.get('result');

  resultSave = this.result;
  calificativeResult = 'Eres una persona feliz.';

  constructor(private route: ActivatedRoute, private router: Router) {}

  progress: number = 0;
  loadingInterval: any;

  ngOnInit() {
    this.startLoading();
    let numericResult = parseInt(this.result!!);

    if (numericResult < 54) {
      this.calificativeResult = 'No te autopercibes como una persona feliz.';
    }
  }

  startLoading() {
    this.loadingInterval = setInterval(() => {
      this.progress++;
      if (this.progress % 2 === 0)
        //numero aleatorio entre 0 y 100
        this.result = Math.floor(Math.random() * 100).toString();
      if (this.progress === 100) {
        clearInterval(this.loadingInterval);
        this.result = this.resultSave;
        setInterval(() => {
          this.progress++;
        }, 600);
      }
    }, 50);
  }

  back() {
    this.router.navigate(['/happiness-form']);
  }

  git() {
    //open in new tab
    window.open('https://github.com/nicovillamonte/happiness-ai', '_blank');
  }
}
