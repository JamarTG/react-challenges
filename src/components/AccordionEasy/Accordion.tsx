// Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. Some HTML is provided for you as example content along with a chevron icon.

// Requirements
// By default, all sections are collapsed and are hidden from view.
// Clicking a section title toggles the contents.
// If the section is collapsed, the section will be expanded and the contents will be displayed.
// If the section is expanded, the section will be collapsed and the contents will be hidden.
// The sections are independent of each other.
// Example
// Try out an example of an accordion component.

// Notes
// The focus of this question is on functionality, not the styling. Do not spend too much time writing custom CSS.
// You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) and use client-side rendering instead.
// You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

import { nanoid } from 'nanoid';

import './Accordion.css';
import AccordionItem from './AccordionItem';
import { useState } from 'react';

const accordionItemsData = [
  {
    id: nanoid(),
    title: 'HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    showContent: false,
  },
  {
    id: nanoid(),
    title: 'CSS',
    content:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    showContent: false,
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    content:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',

    showContent: false,
  },
];

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState(accordionItemsData);

  const toggleShowContent = (id: string) => {
    setAccordionItems(
      accordionItems.map((accordionItem) =>
        accordionItem.id === id
          ? { ...accordionItem, showContent: !accordionItem.showContent }
          : accordionItem
      )
    );
  };

  return (
    <div className="accordion-container">
      {accordionItems.map(({ id, ...accordionItem }) => (
        <AccordionItem
          key={id}
          toggleShowContent={() => toggleShowContent(id)}
          showContent={accordionItem.showContent}
          {...accordionItem}
        />
      ))}
    </div>
  );
};

export default Accordion;
