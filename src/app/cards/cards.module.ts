import { NgModule } from '@angular/core';

import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';

@NgModule({
  declarations: [
   CardComponent,
   CardButtonComponent,
   CardRoxoComponent,
   CardRoxoButtonComponent
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
