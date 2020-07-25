import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardapioItemComponent } from 'src/app/cardapio/cardapio-item/cardapio-item.component';



@NgModule({
  declarations: [
    CardapioItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardapioItemComponent
  ]
})
export class SharedModule { }
