import React, { useState } from 'react';
import './faq.css';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{question}</h3>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQProps {
  items: FAQItemProps[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Perguntas Frequentes" }) => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="faq-container">
          {items.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
