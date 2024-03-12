import React from "react";
import Img1 from "../assets/blog1.jpg";
import Img2 from "../assets/blog2.jpg";
import Img3 from "../assets/blog3.jpg";

const BlogCard = ({ title, image, description }) => {
  return (
    <div className="mx-auto bg-background rounded-xl shadow-md overflow-hidden md:max-w-2xl transition duration-300 ease-in-out">
      <div className="">
        <div className="">
          <img className="h-48 w-full object-cover" src={image} alt="Blog" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-md text-white text-justify font-semibold mb-4">
            {title}
          </div>
          <a
            href="#"
            className="block text-md leading-tight font-medium text-white text-justify mb-2"
          >
            {description}
          </a>
          <a href="/" className="text-secondary hover:text-white">
            Baca selanjutnya...
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogLayout = () => {
  const blogs = [
    {
      id: 1,
      title: "Mengoptimalkan SEO: Langkah-langkah Penting untuk Situs Web Anda",
      image: Img1,
      description:
        "Optimasi mesin pencari (SEO) menjadi kunci kesuksesan untuk meningkatkan visibilitas situs web Anda di halaman hasil pencarian. Dengan menerapkan praktik terbaik SEO, termasuk namun tidak terbatas pada penelitian kata kunci yang mendalam, pengoptimalan konten, pengaturan struktur situs yang optimal, dan penerapan tautan balik yang relevan, Anda dapat memperbaiki peringkat situs web Anda di mesin pencari seperti Google, Bing, dan Yahoo!. Dengan meningkatkan peringkat SEO, situs web Anda akan mendapatkan lebih banyak eksposur terhadap calon pengunjung yang relevan dengan bisnis atau konten Anda, yang pada gilirannya akan meningkatkan jumlah pengunjung organik, meningkatkan peluang konversi, dan memperkuat kehadiran online Anda secara keseluruhan.",
    },
    {
      id: 2,
      title:
        "Pentingnya Teknologi Terbaru dalam Pengembangan Web: Menyongsong Masa Depan Digital",
      image: Img2,
      description:
        "Dalam era digital yang terus berkembang, teknologi terbaru memainkan peran kunci dalam evolusi pengembangan web. Dengan adopsi teknologi terkini seperti progressive web apps (PWA), AI-powered chatbots, dan frameworks JavaScript seperti React dan Vue.js, pengembang web dapat menciptakan pengalaman pengguna yang lebih dinamis, responsif, dan memuaskan. Dengan memanfaatkan kekuatan teknologi terbaru ini, situs web dapat menyongsong masa depan digital dengan menghadirkan fitur-fitur inovatif yang meningkatkan interaksi pengguna, meningkatkan retensi pengunjung, dan memperkuat citra merek secara online. Dengan demikian, mengadopsi teknologi terbaru dalam pengembangan web bukan hanya suatu keharusan, tetapi juga menjadi kunci untuk tetap relevan dan bersaing di pasar digital yang semakin kompetitif.",
    },
    {
      id: 3,
      title: "Strategi Konten yang Efektif untuk SEO yang Lebih Baik",
      image: Img3,
      description:
        "Dalam upaya meningkatkan peringkat SEO situs web, strategi konten yang efektif memainkan peran penting dalam menarik perhatian mesin pencari dan pengguna. Dengan fokus pada pembuatan konten yang relevan, informatif, dan berkualitas tinggi, Anda dapat menciptakan pengalaman pengguna yang memikat dan bermanfaat. Melalui riset pasar yang cermat dan pemahaman mendalam tentang kebutuhan serta preferensi audiens target Anda, Anda dapat menyusun konten yang tidak hanya menghibur, tetapi juga memberikan nilai tambah yang signifikan bagi pembaca. Dengan menyertakan variasi konten seperti artikel yang mendalam, video yang menarik, infografis yang informatif, dan panduan praktis yang berguna, Anda dapat memenuhi berbagai preferensi dan kebutuhan audiens target Anda, sehingga meningkatkan keterlibatan pengguna, menghasilkan lalu lintas organik yang berkelanjutan, dan memperkuat otoritas domain Anda di dunia maya.",
    },
  ];

  return (
    <section id="blog" className="container mx-auto mb-10">
      <div>
        <h1 className="text-3xl font-semibold text-center my-8">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogLayout;
