  
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
   product!: Product;
  @Input()  disabled = false;
  @Output()  removeProduct: EventEmitter<Product> = new EventEmitter();
  public faTrashAlt = faTrashAlt;

  public removeProductClick(product: Product): void {
    this.removeProduct.emit(product);
  }
}