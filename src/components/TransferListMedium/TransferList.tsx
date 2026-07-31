// Build a component that allows transferring items between two lists.

// Transfer List Example

// Requirements
// There are two lists each initially containing 4 items.
// Each item has a checkbox that can be checked/unchecked.
// Transferring
// Clicking on the double arrow buttons will transfer all items from one list to the other, as specified by the direction of the arrows.
// Clicking on the single arrow buttons will transfer only the selected items, as specified by the direction of the arrows.
// Transferred items are added to the bottom of the destination list.
// Item selection (checked) states are preserved after transferring.
// Buttons are disabled if there are no relevant items to be transferred.

import { useState } from 'react';
import { nanoid } from 'nanoid';
import './TransferList.css';


interface TransferListItem {
  id: string;
  text: string;
  selected: boolean;
}

const data = [
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

const TransferList = () => {
  const [lists, setLists] = useState<TransferListItem[][]>(data);

  const transferItems = (
    transferDirection: 'left' | 'right',
    shouldTranferAllItems = false
  ) => {

    setLists(([listA, listB]) => {
      if (shouldTranferAllItems && transferDirection === 'right')
        return [[], [...listA, ...listB]];
      if (shouldTranferAllItems && transferDirection === 'left')
        return [[...listA, ...listB], []];

      const transferringListItems: TransferListItem[] = [];

      const destinationList =
        transferDirection === 'right' ? [...listB] : [...listA];
      const sourceList = transferDirection == 'right' ? [...listA] : [...listB];

      const sourceListExcludingMovingItems = sourceList.filter(
        (sourceListItem) => {
          if (sourceListItem.selected) {
            transferringListItems.push({
              ...sourceListItem,
              selected: !sourceListItem.selected,
            });
          }

          return !sourceListItem.selected;
        }
      );

      return transferDirection == 'right'
        ? [
          [...sourceListExcludingMovingItems],
          [...destinationList, ...transferringListItems],
        ]
        : [
          [...destinationList, ...transferringListItems],
          [...sourceListExcludingMovingItems],
        ];
    });
  };

  const handleChange = (id: string) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        return list.map((listItem) => {
          return listItem.id === id
            ? { ...listItem, selected: !listItem.selected }
            : listItem;
        });
      })
    );
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const navText = e.currentTarget.textContent;

    switch (navText) {
      case '<<':
        transferItems('left', true);
        break;
      case '<':
        transferItems('left');
        break;
      case '>':
        transferItems('right');
        break;
      case '>>':
        transferItems('right', true);
        break;
    }

    e.currentTarget.textContent;
  };

  const disableAllToRight = lists[1].length === 0;
  const disableAllToLeft = lists[0].length === 0;
  
  const disableOneToRight = lists[0].every(listItem => !listItem.selected);
  const disableOneToLeft = lists[1].every(listItem => !listItem.selected);;

  return (
    <div className="lists-container">
      {lists.map((list) => {
        return (
          <div className="list-container">
            {list.map((listItem) => {
              return (
                <li key={listItem.id}>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(listItem.id)}
                    checked={listItem.selected}
                  />{' '}
                  {listItem.text}
                </li>
              );
            })}
          </div>
        );
      })}


      <div className="btn-container">
        <button disabled={disableAllToRight}  onClick={handleButtonClick}>{'<<'}</button>
        <button disabled={disableOneToLeft}  onClick={handleButtonClick}>{'<'}</button>
        <button disabled={disableOneToRight} onClick={handleButtonClick}>{'>'}</button>
        <button disabled={disableAllToLeft}  onClick={handleButtonClick}>{'>>'}</button>
      </div>
    </div>
  );
};

export default TransferList;
