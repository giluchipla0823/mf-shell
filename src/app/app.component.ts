import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import PubSub from 'pubsub-js';

interface ICommonProduct {
  price: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {
  constructor() {}
  count = 0;
  private _products: ICommonProduct[] = [];

  ngOnInit(): void {
    this.getCount();
    PubSub.subscribe('products', (_messsage, data) => {
      this._products.push(data as unknown as ICommonProduct);
      this.count++;
      localStorage.setItem('products', JSON.stringify(this._products));
    });
  }

  getCount() {
    const productsStorage = localStorage.getItem('products');

    if (productsStorage) {
      const product = JSON.parse(productsStorage) as ICommonProduct[];
      this.count = product.length;
    }
  }
}
