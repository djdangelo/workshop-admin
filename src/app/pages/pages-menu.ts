import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/home',
    home: true,
  },
  {
    title: 'MANTENIMIENTO',
    group: true,
  },
  {
    title: 'Usuarios',
    icon: 'people-outline',
    children: [
      {
        title: 'Lista de Usuarios',
        link: 'list-users',
      },
    ],
  },
];
