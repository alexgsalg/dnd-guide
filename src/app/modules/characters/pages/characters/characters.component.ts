import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { ConditionsComponent } from '../../components/conditions/conditions.component';
import { AlignmentsComponent } from '../../components/alignments/alignments.component';
import { LanguagesComponent } from '../../components/languages/languages.component';

interface ICharacters {
  name: string;
  index: string;
}

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    PageHeaderComponent,
    MatTabsModule,
    MatIconModule,
    ConditionsComponent,
    AlignmentsComponent,
    LanguagesComponent,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  informations: ICharacters[] = [
    {
      name: 'Alignments',
      index: 'alignss',
    },
    {
      name: 'Conditions',
      index: 'cond',
    },
    {
      name: 'Languages',
      index: 'lang',
    },
  ];
}
