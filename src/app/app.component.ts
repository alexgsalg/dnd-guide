import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularFireDatabaseModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dnd-guide';

  constructor(private database: AngularFireDatabase) {}
}
