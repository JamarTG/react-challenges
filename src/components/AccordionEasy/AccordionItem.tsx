interface AccordionItemProps {
  title: string;
  content: string;
  showContent: boolean;
  toggleShowContent: () => void;
}

const AccordianItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  showContent,
  toggleShowContent
}) => {
  return (
    <div className="accordion-item">
      <button className="accordion-item-button" onClick={toggleShowContent}>
        <h2 className="accordion-header">
          {title} <span aria-hidden={true} className="accordion-icon" />
        </h2>
      </button>

      <p className={showContent ? `accordion-item-content` : ''}>
        {showContent ? content : ''}
      </p>
    </div>
  );
};

export default AccordianItem;
