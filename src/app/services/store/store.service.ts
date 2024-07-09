import { Injectable } from '@angular/core';
import { Items } from '../../types/items';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  items: Items | undefined
  loadingItems: boolean = false
  loadingError: Error | undefined
}
