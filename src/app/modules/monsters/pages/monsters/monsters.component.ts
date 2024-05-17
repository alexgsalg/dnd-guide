import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';

import { GameInfoCardComponent } from '@shared/components/game-info-card/game-info-card.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { IMonster } from '@monsters/state/monsters.interface';
import { MonsterStore } from '@monsters/state/monsters.store';

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    PageHeaderComponent,
    GameInfoCardComponent,
    SearchBarComponent,
  ],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.scss',
})
export class MonstersComponent {
  rawList: IMonster[] = [];
  monsterList: IMonster[] = [];
  pageLoading: boolean = false;

  constructor(
    private database: AngularFireDatabase,
    private store: MonsterStore
  ) {}

  ngOnInit() {
    this.getMonsters();
    this.rawList = this.monsterList;
  }

  onSelection(monsters: IMonster[]) {
    this.monsterList = monsters;
  }

  handleSearchLoading(isLoading: boolean) {
    this.pageLoading = isLoading;
  }

  getMonsters() {
    this.pageLoading = true;

    this.store.monsters$.subscribe({
      next: (monsters) => {
        if (monsters.length === 0) {
          this.fetchData();
          return;
        }
        this.rawList = monsters;
        this.monsterList = monsters;
        this.pageLoading = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  fetchData() {
    this.pageLoading = true;

    const monstersRef = this.database.list('monsters');
    monstersRef.valueChanges().subscribe((val) => {
      this.monsterList = val as IMonster[];
      this.store.setMonsters(this.monsterList);
      this.pageLoading = false;
    });
  }
}
