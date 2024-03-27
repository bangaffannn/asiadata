import React, { useState } from "react";
import {
  FaDesktop,
  FaMobileAlt,
  FaSearch,
  FaChartBar,
  FaPaintBrush,
  FaPodcast,
} from "react-icons/fa";

import Img1 from "../assets/Tab/content.png";
import Img2 from "../assets/Tab/mobileapps.png";
import Img3 from "../assets/Tab/performance.png";
import Img4 from "../assets/Tab/seo.png";
import Img5 from "../assets/Tab/uiux.png";
import Img6 from "../assets/Tab/web.png";

const BannerCard = ({ imageUrl, title, description }) => {
  return (
    <div className="mt-5 w-full rounded overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img className="max-w-sm" src={imageUrl} alt="Banner" />
        <div className="px-6 py-4">
          <div className="font-bold text-4xl text-white mb-2">{title}</div>
          <p className="text-white text-base text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ServicesTab() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    "Website Development",
    "Mobile Apps Development",
    "SEO For UMKM",
    "Performance Marketing",
    "UI/UX Design",
    "Pembuatan Podcast dan Video Content",
  ];

  const icons = [
    <FaDesktop />,
    <FaMobileAlt />,
    <FaSearch />,
    <FaChartBar />,
    <FaPaintBrush />,
    <FaPodcast />,
  ];

  return (
    <div id="services" className="mt-20 mb-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center my-8">
          Our Services
        </h1>
        <div className="mx-4 sm:mx-0">
          <ul className="w-full px-4 py-6 sm:py-4 border rounded-full flex flex-row justify-around items-center">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`hover:text-accent transition-all duration-300 ease-in-out ${
                  activeTab === index
                    ? "text-accent transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <span className="hidden sm:inline">{tab}</span>
                <span className="sm:hidden">{icons[index]}</span>
              </button>
            ))}
          </ul>
        </div>
        <div className="container mx-auto">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`w-full ${activeTab === index ? "block" : "hidden"}`}
            >
              {tab === "Website Development" && (
                <BannerCard
                  imageUrl={Img6}
                  title="Website Development"
                  description={
                    <div>
                      <p className="mt-2">Apa yang Kami Tawarkan:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Desain Kreatif dan Responsif
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Pengembangan Berbasis Teknologi Terbaru
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Keamanan Terjamin
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimisasi SEO
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Integrasi Layanan
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
              {tab === "Mobile Apps Development" && (
                <BannerCard
                  imageUrl={Img2}
                  title="Mobile Apps Development"
                  description={
                    <div>
                      <p className="mt-2">Apa yang Kami Tawarkan:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Konsultasi dan Strategi
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Desain UI/UX yang Menarik
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Pengembangan Aplikasi Kustom
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Integrasi API dan Fungsionalitas Lanjutan
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Uji Kualitas dan Penjaminan Kualitas
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Peluncuran dan Dukungan
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
              {tab === "SEO For UMKM" && (
                <BannerCard
                  imageUrl={Img4}
                  title="SEO FOR UMKM"
                  description={
                    <div>
                      <p className="mt-2">Apa yang Kami Tawarkan:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimisasi Google My Business (GMB)
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimisasi Halaman Web Lokal
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Pemasaran Konten Lokal
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimisasi Peta dan Direktori Lokal
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimisasi Penilaian dan Ulasan
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Pemantauan dan Pelaporan Kinerja
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
              {tab === "Performance Marketing" && (
                <BannerCard
                  imageUrl={Img3}
                  title="Performance Marketing"
                  description={
                    <div>
                      <p className="mt-2">Apa yang Kami Tawarkan:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Strategi Pemasaran Digital
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimasi Kampanye
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Pengukuran Kinerja
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          A/B Testing
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Laporan dan Analisis
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Beragam Kanal Pemasaran
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
              {tab === "UI/UX Design" && (
                <BannerCard
                  imageUrl={Img5}
                  title="UI/UX Design"
                  description={
                    <div>
                      <p className="mt-2">Apa yang Kami Tawarkan:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Penelitian Pengguna
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Wireframing dan Prototyping
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Desain Visual
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Usability Testing
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Iterasi dan Responsiveness
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Konsistensi dan Aksesibilitas
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Kolaborasi Tim
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
              {tab === "Pembuatan Podcast dan Video Content" && (
                <BannerCard
                  imageUrl={Img1}
                  title="Pembuatan Podcast dan Video Content"
                  description={
                    <div>
                      <p className="mt-2">Apa yang Kami Tawarkan:</p>
                      <p className="font-bold mt-2">Pembuatan Podcast:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Perencanaan
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Produksi
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Distribusi
                        </li>
                      </ul>
                      <p className="font-bold mt-2">Pembuatan Video:</p>
                      <ul className="ml-6">
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Konsep dan Skrip
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Produksi
                        </li>
                        <li className="mt-2 px-4 py-2 rounded-full bg-accent text-white">
                          Optimasi SEO
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
