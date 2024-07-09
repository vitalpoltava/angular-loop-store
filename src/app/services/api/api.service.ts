import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { HttpClient } from '@angular/common/http';
import { Items } from '../../types/items';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public store: StoreService, private http: HttpClient) { }

  getItems() {
    this.store.loadingItems = true;
    this.http.get<Items>('https://api.restful-api.dev/objects').subscribe((items) => {
      this.store.items = items;
      this.store.loadingItems = false;
    }, (error: Error) => {
      this.store.loadingError = error
    });
  }
}
