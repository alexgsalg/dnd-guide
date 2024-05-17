import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-game-info-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
    ButtonComponent,
  ],
  templateUrl: './game-info-card.component.html',
  styleUrl: './game-info-card.component.scss',
})
export class GameInfoCardComponent {
  @Input() title: string | undefined;
  @Input() desc: string | undefined;
  @Input() hasThumbnail: boolean = false;
  @Input() loading: boolean = false;
}
