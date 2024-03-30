import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgIf,
    NgTemplateOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('to learn adnfalj'),
    new WishItem('Get faskjdfal'),
    new WishItem('jklasdlflasdk', true),
  ];
  title = 'wishlist';
  listFilter: String = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[Number(this.listFilter)]);
  }
}
