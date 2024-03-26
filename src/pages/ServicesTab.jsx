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
          <div className="font-bold text-xl text-accent mb-2">{title}</div>
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
          <ul className="w-full px-4 py-4 border rounded-full flex flex-row justify-around items-center">
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
                      <p className="font-bold">Apa yang Kami Tawarkan:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Desain Kreatif dan Responsif: Kami mengutamakan desain
                          yang menarik dan responsif agar website Anda dapat
                          memberikan pengalaman pengguna yang optimal di
                          berbagai perangkat, mulai dari desktop hingga
                          smartphone.
                        </li>
                        <li>
                          Pengembangan Berbasis Teknologi Terbaru: Kami
                          menggunakan teknologi terkini dalam pengembangan web,
                          termasuk HTML5, CSS3, JavaScript (termasuk framework
                          seperti React, Angular, dan Vue.js), serta platform
                          manajemen konten seperti WordPress dan Drupal.
                        </li>
                        <li>
                          Keamanan Terjamin: Keamanan adalah prioritas utama
                          kami. Kami mengimplementasikan praktik terbaik dalam
                          pengembangan web untuk melindungi data sensitif dan
                          mengurangi risiko serangan cyber.
                        </li>
                        <li>
                          Optimisasi SEO: Kami memperhatikan optimisasi mesin
                          pencari (SEO) saat membangun website Anda untuk
                          meningkatkan visibilitas online dan memperoleh
                          peringkat yang lebih tinggi di hasil pencarian.
                        </li>
                        <li>
                          Integrasi Layanan: Kami dapat mengintegrasikan website
                          Anda dengan berbagai layanan, seperti sistem manajemen
                          konten, sistem pembayaran, dan platform media sosial
                          untuk meningkatkan fungsionalitas dan konektivitas.
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
                      <p className="font-bold">Apa yang Kami Tawarkan:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Konsultasi dan Strategi: Kami akan berkolaborasi
                          dengan Anda untuk memahami visi Anda dan merumuskan
                          strategi yang tepat untuk pengembangan aplikasi Anda.
                          Dari identifikasi kebutuhan hingga merancang
                          pengalaman pengguna yang optimal, kami akan membantu
                          Anda setiap langkah dalam proses pengembangan.
                        </li>
                        <li>
                          Desain UI/UX yang Menarik: Tim desain kami akan
                          membuat antarmuka pengguna (UI) yang menarik dan
                          pengalaman pengguna (UX) yang intuitif untuk aplikasi
                          Anda. Kami memprioritaskan kepuasan pengguna untuk
                          memastikan aplikasi Anda memiliki daya tarik visual
                          dan fungsionalitas yang baik.
                        </li>
                        <li>
                          Pengembangan Aplikasi Kustom: Menggunakan teknologi
                          terkini dan praktik pengembangan terbaik, tim
                          pengembangan kami akan membangun aplikasi seluler yang
                          sesuai dengan kebutuhan dan spesifikasi Anda. Kami
                          ahli dalam pengembangan aplikasi untuk platform iOS
                          dan Android menggunakan bahasa pemrograman seperti
                          Swift, Kotlin, dan React Native.
                        </li>
                        <li>
                          Integrasi API dan Fungsionalitas Lanjutan: Kami dapat
                          mengintegrasikan aplikasi Anda dengan berbagai API dan
                          layanan eksternal untuk meningkatkan
                          fungsionalitasnya. Mulai dari integrasi media sosial
                          hingga pembayaran online, kami akan memastikan
                          aplikasi Anda memiliki semua fitur yang Anda butuhkan.
                        </li>
                        <li>
                          Uji Kualitas dan Penjaminan Kualitas: Sebelum
                          peluncuran, aplikasi Anda akan melalui serangkaian
                          pengujian kualitas yang ketat untuk memastikan kinerja
                          yang stabil dan pengalaman pengguna yang tanpa
                          masalah. Kami juga akan menyediakan dukungan
                          pasca-peluncuran untuk memastikan aplikasi Anda tetap
                          berjalan dengan baik.
                        </li>
                        <li>
                          Peluncuran dan Dukungan: Kami akan membantu Anda
                          meluncurkan aplikasi Anda ke toko aplikasi (App Store
                          atau Google Play Store) dan memberikan dukungan
                          pascapeluncuran yang diperlukan untuk memastikan
                          kesuksesan jangka panjang aplikasi Anda.
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
                      <p className="font-bold">Apa yang Kami Tawarkan:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Optimisasi Google My Business (GMB): Penyedia layanan
                          Local SEO akan membantu mengoptimalkan dan mengelola
                          profil bisnis Anda di Google My Business. Ini termasuk
                          memastikan informasi bisnis Anda seperti alamat, nomor
                          telepon, jam kerja, dan ulasan pelanggan adalah akurat
                          dan terkini.
                        </li>
                        <li>
                          Optimisasi Halaman Web Lokal: Membantu mengoptimalkan
                          halaman web Anda untuk pencarian lokal dengan
                          memasukkan kata kunci lokal yang relevan dalam konten,
                          meta deskripsi, judul halaman, dan URL. Memastikan
                          konsistensi informasi bisnis Anda di situs web Anda
                          dengan yang ada di Google My Business.
                        </li>
                        <li>
                          Pemasaran Konten Lokal: Membuat dan mempromosikan
                          konten yang relevan dengan audiens lokal Anda, seperti
                          artikel blog, ulasan bisnis, dan testimoni pelanggan.
                          Meningkatkan kehadiran Anda dalam komunitas lokal
                          dengan berpartisipasi dalam acara-acara lokal dan
                          berkolaborasi dengan bisnis lokal lainnya.
                        </li>
                        <li>
                          Optimisasi Peta dan Direktori Lokal: Memastikan bahwa
                          bisnis Anda terdaftar dengan benar di direktori lokal
                          dan peta online seperti Yelp, Yellow Pages, dan Apple
                          Maps. Memperbarui informasi bisnis Anda secara teratur
                          di direktori lokal untuk memastikan konsistensi dan
                          akurasi.
                        </li>
                        <li>
                          Optimisasi Penilaian dan Ulasan: Mendorong pelanggan
                          untuk memberikan ulasan positif tentang bisnis Anda di
                          platform seperti Google, Yelp, dan Facebook. Merespons
                          ulasan pelanggan dengan cepat dan secara profesional
                          untuk meningkatkan reputasi bisnis Anda.
                        </li>
                        <li>
                          Pemantauan dan Pelaporan Kinerja: Melakukan pemantauan
                          terhadap peringkat pencarian lokal Anda dan kinerja
                          situs web Anda secara berkala. Memberikan laporan
                          tentang perkembangan kampanye Local SEO dan memberikan
                          saran perbaikan yang diperlukan.
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
                      <p className="font-bold">Apa yang Kami Tawarkan:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Strategi Pemasaran Digital: Tim ahli dalam jasa ini
                          akan merancang strategi pemasaran digital yang sesuai
                          dengan tujuan bisnis Anda. Mereka akan menganalisis
                          target audiens Anda, menentukan platform digital yang
                          tepat, dan mengidentifikasi metode terbaik untuk
                          mencapai sasaran Anda.
                        </li>
                        <li>
                          Optimasi Kampanye: Jasa ini akan mengelola dan
                          mengoptimalkan kampanye digital Anda secara
                          terus-menerus. Mereka akan melakukan penyesuaian
                          berdasarkan data dan analisis untuk meningkatkan
                          kinerja kampanye Anda, seperti penyesuaian target
                          audiens, peningkatan kata kunci, atau pengoptimalan
                          iklan.
                        </li>
                        <li>
                          Pengukuran Kinerja: Salah satu aspek kunci dari
                          digital performance marketing adalah kemampuan untuk
                          mengukur hasil secara akurat. Tim ini akan menggunakan
                          berbagai alat analitik dan metrik untuk melacak
                          konversi, klik, penjualan, atau metrik lainnya yang
                          relevan, sehingga Anda dapat memahami secara jelas
                          bagaimana kampanye Anda berperforma.
                        </li>
                        <li>
                          A/B Testing: Jasa ini juga akan melakukan uji coba A/B
                          untuk menguji berbagai elemen kampanye seperti judul
                          iklan, teks, gambar, atau penempatan iklan. Dengan
                          melakukan uji coba ini, mereka dapat mengidentifikasi
                          apa yang paling efektif dalam menarik perhatian
                          audiens Anda dan meningkatkan tingkat konversi.
                        </li>
                        <li>
                          Laporan dan Analisis: Anda akan menerima laporan
                          berkala yang menyajikan hasil kampanye Anda dan
                          analisis tentang kinerja Anda. Dari laporan ini, Anda
                          dapat memperoleh wawasan yang berharga tentang
                          efektivitas strategi pemasaran Anda dan membuat
                          keputusan yang lebih baik untuk masa depan.
                        </li>
                        <li>
                          Beragam Kanal Pemasaran: Tim ini akan memanfaatkan
                          berbagai kanal pemasaran digital seperti mesin pencari
                          (SEO/SEM), media sosial, iklan display, email
                          marketing, dan lainnya, sesuai dengan kebutuhan bisnis
                          Anda.
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
                      <p className="font-bold">Apa yang Kami Tawarkan:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Penelitian Pengguna: Melakukan penelitian mendalam
                          tentang pengguna target, termasuk analisis kebutuhan,
                          preferensi, dan perilaku pengguna untuk memahami
                          konteks penggunaan produk.
                        </li>
                        <li>
                          Wireframing: Membuat kerangka dasar (wireframe) dari
                          antarmuka pengguna untuk menggambarkan struktur dan
                          tata letak elemen-elemen utama tanpa memperhatikan
                          desain grafis yang detail.
                        </li>
                        <li>
                          Prototyping: Membangun prototipe interaktif dari
                          produk yang memungkinkan pengguna untuk berinteraksi
                          dengan antarmuka seolah-olah produk tersebut sudah
                          jadi, sehingga memudahkan pengujian dan iterasi.
                        </li>
                        <li>
                          Desain Visual: Merancang tampilan grafis dari
                          antarmuka pengguna, termasuk pemilihan warna,
                          tipografi, ikon, dan elemen-elemen visual lainnya
                          untuk menciptakan estetika yang menarik dan konsisten.
                        </li>
                        <li>
                          Usability Testing: Melakukan pengujian produk dengan
                          pengguna nyata untuk mengidentifikasi masalah
                          usability, mendapatkan umpan balik, dan memvalidasi
                          desain.
                        </li>
                        <li>
                          Iterasi: Memperbaiki dan memperbarui desain
                          berdasarkan hasil pengujian dan umpan balik untuk
                          meningkatkan kualitas pengalaman pengguna.
                        </li>
                        <li>
                          Responsiveness: Memastikan bahwa desain responsif,
                          artinya antarmuka pengguna dapat menyesuaikan tata
                          letaknya dengan baik di berbagai perangkat dan
                          resolusi layar.
                        </li>
                        <li>
                          Konsistensi: Membangun desain yang konsisten di
                          seluruh aplikasi atau situs web, termasuk penggunaan
                          elemen UI yang seragam dan pola desain yang konsisten.
                        </li>
                        <li>
                          Aksesibilitas: Memperhatikan aksesibilitas desain
                          untuk memastikan bahwa produk dapat diakses dan
                          digunakan dengan mudah oleh semua pengguna, termasuk
                          mereka yang memiliki kebutuhan khusus.
                        </li>
                        <li>
                          Kolaborasi Tim: Berkolaborasi dengan pengembang
                          perangkat lunak, manajer produk, dan pemangku
                          kepentingan lainnya untuk memastikan visi desain
                          terwujud dalam produk akhir.
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
                      <p className="font-bold">Apa yang Kami Tawarkan:</p>
                      <p className="font-bold">Pembuatan Podcast:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Perencanaan: Kami akan bekerja sama dengan Anda untuk
                          merancang konsep podcast yang sesuai dengan tujuan dan
                          target audiens Anda.
                        </li>
                        <li>
                          Produksi: Tim kami akan menangani semua aspek
                          produksi, termasuk rekaman, penyuntingan, mixing, dan
                          mastering untuk memastikan kualitas audio yang
                          optimal.
                        </li>
                        <li>
                          Distribusi: Kami akan membantu Anda mengatur
                          distribusi podcast Anda ke berbagai platform podcast
                          terkemuka, seperti Apple Podcasts, Spotify, Google
                          Podcasts, dan lainnya.
                        </li>
                      </ul>
                      <p className="font-bold">Pembuatan Video:</p>
                      <ul className="list-disc ml-6">
                        <li>
                          Konsep dan Skrip: Kami akan bekerja sama dengan Anda
                          untuk mengembangkan konsep video yang sesuai dengan
                          merek dan tujuan Anda. Tim kami juga dapat membantu
                          dalam penulisan skrip yang menarik.
                        </li>
                        <li>
                          Produksi: Dari pengambilan gambar hingga penyuntingan,
                          tim kami akan memastikan setiap aspek produksi video
                          Anda berjalan lancar. Kami menggunakan peralatan dan
                          teknologi terbaru untuk menghasilkan video berkualitas
                          tinggi.
                        </li>
                        <li>
                          Optimasi SEO: Kami juga akan membantu Anda
                          mengoptimalkan video Anda untuk mesin pencari sehingga
                          lebih mudah ditemukan oleh audiens potensial Anda di
                          platform seperti YouTube dan media sosial.
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
