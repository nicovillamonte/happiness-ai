import { Component } from '@angular/core';
import { MentalHealth } from '../DTO/mental-health.dto';

@Component({
  selector: 'mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss'],
})
export class MentalHealthComponent {
  questionary = new MentalHealth().getQuestionary();
}
