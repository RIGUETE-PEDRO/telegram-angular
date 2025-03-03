import { NgModule } from '@angular/core';

import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonCacelComponent } from '../card-button-cacel/card-button-cacel.component';

@NgModule({
  declarations: [
   CardComponent,
   CardButtonComponent,
   CardRoxoComponent,
   CardRoxoButtonComponent,
   CardButtonCacelComponent
  ],
  imports: [

  ],
  exports: [
   CardComponent,
   CardButtonComponent,
   CardRoxoComponent,
   CardRoxoButtonComponent
  ]
})
export class CardsModule { }
