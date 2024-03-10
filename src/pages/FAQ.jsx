import React, { useState } from "react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac mauris lacinia, ut luctus arcu fringilla.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@example.com or by phone at +1234567890.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes, we offer free shipping on all orders over $50 within the continental United States.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open if closed
    }
  };

  const [isSpied, setIsSpied] = useState(false);
  const handleSpyButton = () => {
    setIsSpied(!isSpied);
  };

  const handleButton = (index) => {
    handleToggle(index);
    handleSpyButton();
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="cursor-pointer border border-white hover:border-tertiary transition duration-300 ease-in-out p-4 rounded-lg" onClick={() => handleToggle(index)}>
            <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => handleToggle(index)}>
              <h2 className="text-lg font-semibold cursor-pointer" onClick={() => handleToggle(index)}>{faq.question} </h2>
              <button
                className={`hover:text-tertiary transition-all duration-300 ease-in-out cursor-pointer`}
                onClick={() => handleToggle(index)}
              >
                {openIndex === index ? (
                  <HiOutlineArrowCircleUp size={40} />
                ) : (
                  <HiOutlineArrowCircleDown size={40} />
                )}
              </button>
            </div>
            {openIndex === index && (
              <p className="text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
