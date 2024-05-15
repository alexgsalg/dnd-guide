import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ButtonComponent } from '../button/button.component';
import { IFeatureCard } from './feature-card.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, ButtonComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  @Input() card: IFeatureCard | undefined;

  constructor(private router: Router) {}

  onRedirect(route: string | undefined) {
    if (!route) return;
    this.router.navigate([route]);
  }
}
