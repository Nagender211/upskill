// FaqItem.jsx
import React from 'react';

const FaqItem = (props) => {
  const { fawItemDeatas } = props;
  const { question, answe } = fawItemDeatas;

  return (
    <div>
      FaqItem
      <h1>{question}</h1>
      <h1>{answe}</h1>
    </div>
  );
};

export default FaqItem;
