import { Component } from '@angular/core';
import { FamilyRelation } from '../domain/FamilyRelation';

@Component({
  selector: 'family-relation',
  templateUrl: './family-relation.component.html',
  styleUrls: ['./family-relation.component.scss'],
})
export class FamilyRelationComponent {
  questionary = FamilyRelation.getQuestionary();
}
