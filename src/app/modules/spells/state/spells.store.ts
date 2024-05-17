import { Injectable } from '@angular/core';
import { createStore, select, setProps, withProps } from '@ngneat/elf';
import {
  persistState,
  localStorageStrategy,
  sessionStorageStrategy,
} from '@ngneat/elf-persist-state';
import { ISpells } from './spells.interface';

interface SpellProps {
  list: ISpells[];
}

const initial_state: SpellProps = {
  list: [],
};

const spellStore = createStore(
  { name: 'spells' },
  withProps<SpellProps>(initial_state)
);

export const persist = persistState(spellStore, {
  key: 'spells',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class SpellsStore {
  spells$ = spellStore.pipe(select((state) => state.list));

  setSpells(spells: ISpells[]) {
    spellStore.update(setProps({ list: spells }));
  }

  getSpells(): ISpells[] {
    return spellStore.getValue().list;
  }
}
