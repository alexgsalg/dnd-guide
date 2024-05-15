import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '@shared/components/button/button.component';
import { FeatureCardComponent } from '@shared/components/feature-card/feature-card.component';

import { CardsList } from '@home/state/home.utils';
import { IFeatureCard } from '@shared/components/feature-card/feature-card.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FeatureCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage {
  cards: IFeatureCard[] = [];

  ngOnInit() {
    this.cards = CardsList;
  }
}
