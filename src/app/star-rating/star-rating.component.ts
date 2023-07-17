import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() rating: number;
  stars: number[];

  constructor() {
    this.stars = [1, 2, 3, 4, 5];
  }

  get currentRating(): number {
    return Math.round(this.rating);
  }
}
