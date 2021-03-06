import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCartPlus, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input()  product!: Product;
  @Input()  isGreaterThenMaxOrderCount = false;
  @Output()  addProductToCart: EventEmitter<Product> = new EventEmitter();
  public faCartPlus = faCartPlus;
  public faCaretDown = faCaretDown;
  public faCaretUp = faCaretUp;
  public isMaxOrderCount$!: Observable<boolean>;
  public showLongDescription = false;
}