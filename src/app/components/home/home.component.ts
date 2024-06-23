import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { ProuctsService } from 'src/app/services/proucts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private _ProuctsService: ProuctsService) {}
  productsShow: Products[] = [];
  unsubscripeAllProduct: Subscription = new Subscription();
  ngOnInit(): void {
    this.unsubscripeAllProduct = this._ProuctsService
      .getAllProduct()
      .subscribe({
        next: (res) => {
          console.log(res.data);
          this.productsShow = res.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubscripeAllProduct.unsubscribe;
    console.log('this is cancel');
  }
}
