import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss',
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter: String = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[Number(value)]);
  }
}
