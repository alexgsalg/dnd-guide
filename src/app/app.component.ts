import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
  ChildEvent,
} from '@angular/fire/compat/database';
import { Database } from 'firebase/database';
import { Observable } from 'rxjs';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import firebase from 'firebase/app';
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
  spells: Observable<any[]> | undefined;

  constructor(private database: AngularFireDatabase) {}

  ngOnInit() {
    const tutorialsRef = this.database.list('spells');
    tutorialsRef.valueChanges().subscribe((varl) => {
      console.log(varl);
    });
  }
}
