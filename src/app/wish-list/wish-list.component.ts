import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
