import React, { useState } from "react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const FAQ = () => {
  const faqs = [
    {
      question: "Apakah saya membutuhkan website untuk bisnis saya?",
      answer:
        "Ya, memiliki situs web adalah kunci penting dalam membangun kehadiran online bagi bisnis Anda. Ini membantu meningkatkan visibilitas, kredibilitas, dan aksesibilitas bisnis Anda.",
    },
    {
      question: "Berapa lama proses pengembangan website atau mobile apps?",
      answer:
        "Lama waktu pengembangan dapat bervariasi tergantung pada kompleksitas proyek. Proyek sederhana dapat selesai dalam beberapa minggu, sementara proyek yang lebih kompleks dapat memakan waktu beberapa bulan.",
    },
    {
      question: "Berapa biaya pembuatan aplikasi mobile?",
      answer:
        "Biaya pembuatan aplikasi mobile tergantung pada berbagai faktor termasuk kompleksitas aplikasi, fitur yang diminta, dan biaya pengembang. Tapi yang pasti biaya layanan pada ASIADATA sangat terjangkau karena kami tidak melibatkan pihak ketiga (vendor) dalam pelaksanaan proyek",
    },
    {
      question: "Apa Manfaat Pembuatan Podcast dan Konten Video untuk Bisnis?",
      answer: "Podcast dan konten video adalah cara yang efektif untuk terhubung dengan audiens, meningkatkan kesadaran merek, dan memperkuat hubungan dengan pelanggan.",
    },
    {
      question: "Apa Saja Strategi Digital Marketing yang Efektif?",
      answer:
        "Strategi digital marketing yang efektif termasuk SEO, PPC (Google Ads), pemasaran konten, media sosial, dan email marketing.",
    },
    {
      question: "Bagaimana Cara Mengukur Keberhasilan Kampanye Digital Marketing?",
      answer:
        "Keberhasilan kampanye digital dapat diukur melalui metrik seperti tingkat konversi, jumlah lalu lintas, tingkat interaksi, dan ROI (Return on Investment).",
    },
    {
      question: "Berapa estimasi biaya layanan di ASIADATA TECHNOLOGY?",
      answer:
        "Dalam perencanaan dan pelaksanaan proyek, kami menentukan rencana anggaran layanan TERGANTUNG pada budget masing-masing klien. Hal ini yang membuat layanan kami sangat terjangkau bagi klien berbagai macam bidang dan sektor",
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
    <div id="faq" className="container mx-auto px-4 py-8 mt-10">
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
