import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';

import { GameInfoCardComponent } from '@shared/components/game-info-card/game-info-card.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { ISpells } from '@spells/state/spells.interface';
import { SpellsStore } from '@spells/state/spells.store';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    PageHeaderComponent,
    GameInfoCardComponent,
    SearchBarComponent,
  ],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss',
})
export class SpellsComponent {
  rawList: ISpells[] = [];
  spellList: ISpells[] = [];
  pageLoading: boolean = false;

  constructor(
    private database: AngularFireDatabase,
    private store: SpellsStore
  ) {}

  ngOnInit() {
    this.getSpells();
    this.rawList = this.spellList;
  }

  onSelection(spells: ISpells[]) {
    this.spellList = spells;
  }

  handleSearchLoading(isLoading: boolean) {
    this.pageLoading = isLoading;
  }

  getSpells() {
    this.pageLoading = true;

    this.store.spells$.subscribe({
      next: (spells) => {
        if (spells.length === 0) {
          this.fetchData();
          return;
        }
        this.rawList = spells;
        this.spellList = spells;
        this.pageLoading = false;
      },
      error: (err) => {
        console.error(err);
      },
    });

    if (this.spellList?.length === 0) {
      const spellsRef = this.database.list('spells');
      spellsRef.valueChanges().subscribe((val) => {
        this.spellList = val as ISpells[];
        this.store.setSpells(this.spellList);
        this.pageLoading = false;
      });
    }
  }

  fetchData() {
    this.pageLoading = true;

    const spellsRef = this.database.list('spells');
    spellsRef.valueChanges().subscribe((val) => {
      this.spellList = val as ISpells[];
      this.store.setSpells(this.spellList);
      this.pageLoading = false;
    });
  }
}
