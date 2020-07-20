import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedAccountPageRoutingModule } from './created-account-routing.module';

import { CreatedAccountPage } from './created-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedAccountPageRoutingModule
  ],
  declarations: [CreatedAccountPage]
})
export class CreatedAccountPageModule {}
