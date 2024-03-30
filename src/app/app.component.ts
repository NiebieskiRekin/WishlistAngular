import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgTemplateOutlet, FormsModule],
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
  newWishText = '';

  toggleItem(e: any, i: number) {
    console.log(e, i);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
