import React from 'react';

const Cards = ({ title, content, }) => {
  return (
    <div className="container-cards">
      <div className="cards-content">
        <h2 className="cards-title font-bold">{title}</h2>
        <p className="cards-text font-normal">{content}</p>
      </div>
    </div>
  );
};

export default Cards;
