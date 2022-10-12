import { Component, Input } from '@angular/core';

import { CategoryCard } from '../interfaces/category.interface';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  title = 'pair-me-desktop';

  @Input()
  public cardData!: CategoryCard;
}
