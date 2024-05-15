import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, HeaderMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMobileMenu = false;

  handleIsMobile = (): boolean => {
    return window.innerWidth < 900;
  };

  toggleMenu = () => {
    this.showMobileMenu = !this.showMobileMenu;
  };
}
