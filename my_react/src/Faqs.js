import React, { useState } from 'react';
import '../src/Assets/CSS/Faqs.css';
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What materials are your watches made of?", answer: "Our watches are crafted from high-quality stainless steel, sapphire glass, and premium leather or metal straps." },
    { question: "Are your watches water-resistant?", answer: "Yes, all our watches are water-resistant up to 50 meters, suitable for everyday wear and occasional swimming." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship our watches worldwide with reliable courier services." },
    { question: "What is the warranty period for your watches?", answer: "We provide a 2-year warranty covering manufacturing defects." },
    { question: "Can I customize my watch?", answer: "Yes, we offer custom engraving options on selected models." }
  ];

  return (
    <div className="faqs">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <div className="faqs-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
