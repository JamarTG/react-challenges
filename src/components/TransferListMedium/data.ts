import { nanoid } from "nanoid";

export interface TransferListItem {
  id: string;
  text: string;
  selected: boolean;
}

const data:TransferListItem[][] = [
  [
    {
      id: nanoid(),
      text: 'HTML',
      selected: false,
    },
    {
      id: nanoid(),
      text: 'CSS',
      selected: false,
    },
    {
      id: nanoid(),
      text: 'Javascript',
      selected: false,
    },
    {
      id: nanoid(),
      text: 'Typescript',
      selected: false,
    },
  ],
  [
    {
      id: nanoid(),
      text: 'React',
      selected: false,
    },
    {
      id: nanoid(),
      text: 'Angular',
      selected: false,
    },
    {
      id: nanoid(),
      text: 'Vue',
      selected: false,
    },
    {
      id: nanoid(),
      text: 'Svelte',
      selected: false,
    },
  ],
];

export default data;