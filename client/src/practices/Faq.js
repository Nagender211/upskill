// Faq.jsx
import React, { Component } from 'react';
import FaqItem from './FaqItem';

const faqQuestiong = [
  { id: 1, question: 'this is first the question' },
  { id: 2, question: 'this aec is the question' },
  { id: 3, question: 'this thrid is the question' },
  { id: 4, question: 'this four is the question' },
];

const faqAnswer = [
  { answeId: 1, answe: 'thia ia the answer' },
  { answeId: 2, answe: 'thia 2 ia the answer' },
  { answeId: 3, answe: 'thia 3 ia the answer' },
  { answeId: 4, answe: 'thia 5 ia the answer' },
];

class Faq extends Component {
  state = { plusIcon: false, initialList: faqQuestiong[0].id };

  getFaqFillter = () => {
    const { initialList, plusIcon } = this.state;
    const questionFind=faqQuestiong.find(each=> each.id===initialList);
    const answerFind=faqAnswer.find(each=>each.answeId===initialList);
    return [
      {
        id: initialList,
        question: questionFind ? questionFind.question : '',
        answe: answerFind ? answerFind.answe: ''
      }
    ]
  };

  render() {
    const fillterItem = this.getFaqFillter();
    return (
      <div>
        <h1>Faqs</h1>
        {fillterItem.map(each => (
          <FaqItem fawItemDeatas={each} key={each.id} />
        ))}
        
    
      </div>
    );
  }
}

export default Faq;
