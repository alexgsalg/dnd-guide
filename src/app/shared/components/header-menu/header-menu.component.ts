import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface INavList {
  name: string;
  route: string;
  icon: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  @Input() show: boolean = false;
  navList: INavList[] = [
    { name: 'Home', route: '/home', icon: 'nav-home' },
    { name: 'Spells', route: '/spells', icon: 'nav-spells' },
    {
      name: 'Monsters',
      route: '/monsters',
      icon: 'nav-monsters',
    },
    {
      name: 'Classes',
      route: '/classes',
      icon: 'nav-classes',
    },
    {
      name: 'Races',
      route: '/races',
      icon: 'nav-races',
    },
    {
      name: 'Characters',
      route: '/characters',
      icon: 'nav-character',
    },
  ];
}
