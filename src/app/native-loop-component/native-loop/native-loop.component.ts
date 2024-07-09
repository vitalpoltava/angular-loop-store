import { Component } from '@angular/core';
import { StoreService } from '../../services/store/store.service';
import { ApiService } from '../../services/api/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-native-loop',
  standalone: true,
  imports: [NgFor],
  providers: [StoreService, ApiService],
  templateUrl: './native-loop.component.html',
  styleUrl: './native-loop.component.scss'
})
export class NativeLoopComponent {
  constructor(public store: StoreService, public api: ApiService) {}

  loadItems() {
    this.api.getItems()
  }
}
