import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // encapsulation: ViewEncapsulation.None,  //serve para torna o scss globalmente nao e recomendado usar-lo
 encapsulation:ViewEncapsulation.Emulated   , //serve para nao deixar o scss escapar do modulo
})
export class CardComponent {
  plano = {
    infors:{
      tipo: 'Simples',
      preco: 100,
    },
  }

}
