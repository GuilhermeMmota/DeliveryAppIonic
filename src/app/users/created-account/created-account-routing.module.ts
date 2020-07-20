import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedAccountPage } from './created-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedAccountPageRoutingModule {}
