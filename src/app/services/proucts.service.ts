import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProuctsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
  }

  getSpecificProduct(id: string | null): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
}
