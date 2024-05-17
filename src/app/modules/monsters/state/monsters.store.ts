import { Injectable } from '@angular/core';
import { createStore, select, setProps, withProps } from '@ngneat/elf';
import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';
import { IMonster } from './monsters.interface';

interface MonsterProps {
  list: IMonster[];
}

const initial_state: MonsterProps = {
  list: [],
};

const monsterStore = createStore(
  { name: 'monsters' },
  withProps<MonsterProps>(initial_state)
);

export const persist = persistState(monsterStore, {
  key: 'monsters',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class MonsterStore {
  monsters$ = monsterStore.pipe(select((state) => state.list));

  setMonsters(monsters: IMonster[]) {
    monsterStore.update(setProps({ list: monsters }));
  }
}
