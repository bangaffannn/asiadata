import React from "react";

import Img1 from '../assets/purple-person.png';

const About = () => {
  return (
    <section id='about' className="mt-10 mb-20">
      <div className="container mx-auto">
        <div>
          <p className="text-white text-lg mb-2 text-center">
            Professional business services
          </p>
          <h1 className="text-4xl text-center text-white mb-10">Make every customers <span className="text-accent font-bold"> easy to discover</span> your business</h1>
        </div>
        <div className="gap-x-2 grid grid-cols-1 md:grid-cols-2 flex justify-center items-center">
          <img src={Img1} alt="" />
          <div className="/">
            <h1 className="text-lg font-bold text-justify mb-2">Sebanyak 97.3% pengguna internet di Indonesia menggunakan GOOGLE SEARCH</h1>
            <p className="text-justify mb-8">Dengan fakta bahwa sebanyak 97.3% pengguna internet di Indonesia mengandalkan Google Search, Anda memiliki peluang besar untuk menjangkau audiens yang luas melalui platform ini. Melalui strategi pemasaran yang tepat dan optimalisasi SEO yang cermat, bisnis Anda dapat meningkatkan visibilitasnya di mesin pencari paling populer ini.</p>
            <h1 className="text-lg font-bold text-justify mb-2">Jadi bisnis nomor satu di tingkat lokal dengan optimalisasi LOCAL SEO yang dapat meningkatkan potensi pasar kamu lebih dari 400%</h1>
            <p className="text-justify">Dengan layanan optimalisasi Local SEO kami, bisnis Anda memiliki kesempatan untuk mendominasi pasar lokal dengan peningkatan potensi lebih dari 400%. Kami menghadirkan strategi SEO yang terukur dan terbukti efektif, membantu bisnis Anda menjadi pilihan nomor satu di komunitas lokal Anda. Dengan fokus pada peningkatan visibilitas dan daya tarik di tingkat lokal, kami memberikan solusi yang dapat membantu bisnis Anda mencapai tingkat pertumbuhan yang luar biasa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
