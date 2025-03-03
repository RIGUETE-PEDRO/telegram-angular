import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  plano = {
    infors:{
      tipo: 'Simples',
      preco: 100,
    },
  }

}
