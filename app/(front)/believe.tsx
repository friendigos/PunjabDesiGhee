import React from 'react';
import './believe.css'; // Assuming you have a CSS file for styles

interface CardProps {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  animationOrder: number;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, imageAlt, title, description, animationOrder }) => {
  return (
    <li
      id={id}
      className="multicolumn-list__item grid__item center scroll-trigger animate--slide-in"
      data-cascade=""
      style={{ '--animation-order': animationOrder } as React.CSSProperties}
    >
      <div className="multicolumn-card content-container">
        <div className="multicolumn-card__image-wrapper multicolumn-card__image-wrapper--half-width multicolumn-card-spacing">
          <div className="media media--transparent media--adapt" style={{ paddingBottom: '100.0%' }}>
            <img
              src={imageUrl}
              alt={imageAlt}
              className="multicolumn-card__image"
              loading="lazy"
              sizes="
                (min-width: 1360px) calc((1360px - 148px) * 0.5 / 4),
                (min-width: 990px) calc((100vw - 148px) * 0.5 / 4),
                (min-width: 750px) calc((100vw - 116px) * 0.5 / 2),
                calc((100vw - 38px) * 0.5 / 2)
              "
            />
          </div>
        </div>
        <div className="multicolumn-card__info">
          <h3 className="inline-richtext">{title}</h3>
          <div className="rte">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

const MulticolumnList: React.FC = () => {
  const cards: CardProps[] = [
    {
      id: 'Slide-template--16968628240576__multicolumn-1',
      imageUrl: '//www.anveshan.farm/cdn/shop/files/authenticity.png?v=1648616970&width=3200',
      imageAlt: 'Authenticity Image',
      title: 'AUTHENTICITY',
      description: 'Bringing purest form of food direct from the farms',
      animationOrder: 1,
    },
    {
      id: 'Slide-template--16968628240576__multicolumn-2',
      imageUrl: '//www.anveshan.farm/cdn/shop/files/tradition-culture.png?v=1648616970&width=3200',
      imageAlt: 'Tradition Image',
      title: 'TRADITION',
      description: 'Harnessing age-old wisdom passed down by Grandmas',
      animationOrder: 2,
    },
    {
      id: 'Slide-template--16968628240576__multicolumn-3',
      imageUrl: '//www.anveshan.farm/cdn/shop/files/brutal-honesty.png?v=1648616970&width=3200',
      imageAlt: 'Brutal Honesty Image',
      title: 'BRUTAL HONESTY',
      description: 'Being 100% transparent & thoroughly lab-tested',
      animationOrder: 3,
    },
    {
      id: 'Slide-template--16968628240576__multicolumn-4',
      imageUrl: '//www.anveshan.farm/cdn/shop/files/purpose.png?v=1648616970&width=3200',
      imageAlt: 'Purpose Image',
      title: 'PURPOSE',
      description: 'Empowering rural India with employment & fair trade',
      animationOrder: 4,
    },
  ];

  return (
    <ul className="multicolumn-list contains-content-container grid grid--2-col-tablet-down grid--4-col-desktop" role="list">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </ul>
  );
};

export default MulticolumnList;