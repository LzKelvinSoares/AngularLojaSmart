import { Component } from '@angular/core';

import { products } from '../../BussinessObjects/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Pronto para compartilhar!');
  }
  onNotify() {
    window.alert('Você será avisado quando o produto estiver disponível!');
  }
}
