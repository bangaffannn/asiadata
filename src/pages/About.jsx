import React from "react";
import Img1 from "../assets/purple-person.png";

const About = () => {
  return (
    <section id="about" className="mt-5 mb-20 mx-4 sm:mx-0">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-white text-lg mb-2">
            Professional business services
          </p>
          <h1 className="text-4xl text-white mb-10">
            Make every customer{" "}
            <span className="text-accent font-bold">easy to discover</span> your
            business
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img className="mx-auto md:mx-0" src={Img1} alt="Illustration" />
          <div className="text-white">
            <h2 className="text-lg font-bold mb-2 text-accent text-justify">
              Sebanyak 97.3% pengguna internet di Indonesia menggunakan GOOGLE
              SEARCH
            </h2>
            <p className="mb-6 text-justify">
              Dengan fakta bahwa sebanyak 97.3% pengguna internet di Indonesia
              mengandalkan Google Search, Anda memiliki peluang besar untuk
              menjangkau audiens yang luas melalui platform ini. Melalui
              strategi pemasaran yang tepat dan optimalisasi SEO yang cermat,
              bisnis Anda dapat meningkatkan visibilitasnya di mesin pencari
              paling populer ini.
            </p>
            <h2 className="text-lg font-bold mb-2 text-accent text-justify">
              Ayo jadi bisnis nomor satu dengan optimalisasi LOKAL
              SEO yang dapat meningkatkan potensi pasar kamu lebih dari 400%
            </h2>
            <p className="mb-6 text-justify">
              Dengan layanan optimalisasi LOKAL SEO kami, bisnis Anda memiliki
              kesempatan untuk mendominasi pasar lokal dengan peningkatan
              potensi lebih dari 400%. Kami menghadirkan strategi SEO yang
              terukur dan terbukti efektif, membantu bisnis Anda menjadi pilihan
              nomor satu di komunitas lokal Anda. Dengan fokus pada peningkatan
              visibilitas dan daya tarik di tingkat lokal, kami memberikan
              solusi yang dapat membantu bisnis Anda mencapai tingkat
              pertumbuhan yang luar biasa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
