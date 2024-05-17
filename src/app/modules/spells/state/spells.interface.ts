export interface ISpells {
  index: string;
  name: string;
  desc: string[];
  duration: string;
  range: string;
  ritual: boolean;
  damage?: string;
  attack_type?: string;
  level?: number;
}
