import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [NgFor, NgIf, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
