import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappinessResultComponent } from './happiness-result/happiness-result.component';
import { HappinesFormComponent } from './happines-form/happines-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'happiness-form',
    pathMatch: 'full',
  },
  {
    path: 'happiness-form',
    component: HappinesFormComponent,
  },
  {
    path: 'happiness/:result',
    component: HappinessResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
