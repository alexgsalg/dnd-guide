import { IFeatureCard } from '@shared/components/feature-card/feature-card.interface';

export const CardsList: IFeatureCard[] = [
  {
    title: 'Spells list',
    text: 'Powerfull and usefull spells to use in you campaign.',
    route: '/spells',
    btnText: 'Search for power',
    cover: 'dnd_spells.png',
    available: true,
  },
  {
    title: 'Monsters list',
    text: 'Search all you need to know to beat them.',
    route: '/monsters',
    btnText: 'Know your enemies',
    cover: 'dragon.jpg',
    available: true,
  },
  {
    title: 'D&D Classes',
    text: 'Choose carefully who you want to become.',
    route: '/classes',
    btnText: 'Search our heros',
    cover: 'wizard.jpg',
    available: true,
  },
  {
    title: 'D&D Races',
    text: 'Understand your history and follow your culture.',
    route: '/races',
    btnText: 'Know your legacy',
    cover: 'dnd_races.png',
    available: true,
  },
  {
    title: 'Characters list',
    text: 'Powerfull and usefull equipments to use in you campaign.',
    route: '/characters',
    btnText: 'Prepare yourself',
    cover: 'dnd.jpg',
    available: true,
  },
];
