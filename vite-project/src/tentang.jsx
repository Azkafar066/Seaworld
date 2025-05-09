import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Komponen Header
const Header = () => (
  <header className="bg-white text-black p-4 flex items-center justify-center gap-6 text-xl font-bold">
    <img src="logo.png" alt="Logo Ancol" className="h-10" />
    <div className="flex gap-4 flex-wrap justify-center">
      <button className="flex items-center gap-1 hover:text-blue-600">
        Tiket & Promo
        <span>▼</span>
      </button>
      <button className="hover:text-blue-600">Acara</button>
      <button className="flex items-center gap-1 hover:text-blue-600">
        Jelajah Ancol
        <span>▼</span>
      </button>
      <button className="flex items-center gap-1 hover:text-blue-600">
        Aktivitas
        <span>▼</span>
      </button>
      <button className="hover:text-blue-600">Blog</button>
      <button className="flex items-center gap-1 hover:text-blue-600">
        Aktivitas
        <span>▼</span>
      </button>
      <button
        onClick={() => window.location.href = "/masuk"}
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">👤</div>
        Masuk
      </button>
    </div>
  </header>
);

// Komponen Konten Blog
const BlogContent = () => (
  <main className="p-6 text-black">
    <img src="Dufan.jpg" alt="Dufan" className="h-48 w-full object-cover mb-4" />

    <button className="bg-white text-blue-600 px-4 py-2 rounded border border-blue-600 hover:bg-blue-50 mb-4">
      Blog
    </button>

    <header className="text-black text-2xl font-bold mb-2">
      Ancol: Destinasi One-Stop Leisure Jakarta Utara
    </header>

    <div className="flex gap-4 items-center mb-4">
      <span className="font-semibold">Bagikan:</span>
      <i className="fa-brands fa-square-whatsapp text-green-500 text-xl"></i>
      <i className="fa-brands fa-square-facebook text-blue-700 text-xl"></i>
      <i className="fa-brands fa-x-twitter text-black text-xl"></i>
    </div>

    <p className="text-black text-base leading-relaxed mb-6">
      Jakarta sebagai ibu kota negara yang menawarkan beragam pilihan objek wisata menarik,
      salah satunya adalah Ancol. Berlokasi di Jakarta Utara, kawasan tepi laut ini menghadirkan
      sederet hiburan dan wahana permainan seru. Tak ayal, Ancol tidak pernah sepi pengunjung
      terutama pada hari libur.
      <br /><br />
      Selain SeaWorld yang menyuguhkan uniknya akuarium raksasa, ada pula Dufan yang semakin
      menantang dengan hadirnya berbagai wahana baru seperti Halilintar & Tornado. Ancol juga
      memiliki area outdoor & indoor yang bisa digunakan untuk berbagai keperluan seperti konser
      atau pertemuan.
    </p>

    {/* Bagian 4 🔑 Kegembiraan di Ancol */}
    <div className="flex gap-2 items-center text-lg font-semibold text-yellow-500 mb-5">
      <span>4</span>
      <i className="fa-solid fa-key"></i>
      <span>Kegembiraan di Ancol</span>
    </div>
    
    {/* Tambahkan konten lainnya */}
    <p className="mb-4">Taman Impian Jaya Ancol, atau sering disebut Ancol, merupakan kawasan wisata terpadu yang dikelola oleh Pemerintah Provinsi DKI Jakarta. Berdiri sejak 1960, saat ini Ancol menawarkan 4 atraksi utama yang tentunya tidak boleh Anda lewatkan:</p>

    <p className="font-semibold mb-2">1. Rekreasi & Resort</p>
    <img src="/atlantis.jpg" alt="Atlantis" className="w-full h-48 object-cover mb-4" />
    <p>Ancol adalah destinasi wisata terlengkap di Jakarta. Berlokasi di tepi pantai, Anda akan disuguhkan pemandangan lepas pantai yang indah serta udara nan segar. Ditambah lagi dengan sederet tempat rekreasi yang membuat Ancol menjadi destinasi terbaik bagi Anda dan keluarga.</p>

    <p className="font-semibold mb-2">Dunia Fantasi (Dufan)</p>
    <p>Dufan merupakan taman bermain outdoor terbesar di Indonesia. Setiap pengunjung akan dimanjakan dengan berbagai pertunjukan seperti Fantasi Keliling Dunia serta wahana menantang yang pastinya akan menguji adrenalin Anda.</p>
    <p>Selain pertunjukan dan wahana, Dufan juga akan memuaskan perut Anda dengan hadirnya sejumlah restoran serta kedai makanan yang mudah ditemukan. Tersedia pula toko merchandise untuk menghadiahkan oleh-oleh khas Dufan untuk keluarga Anda di rumah.</p>

    <p className="font-semibold mb-2">SeaWorld</p>
    <p>Untuk melengkapi liburan Anda, Ancol menghadirkan SeaWorld yang menyajikan beraneka ragam biota laut. Selain sebagai sarana hiburan, kawasan wisata ini juga menjadi salah satu sarana edukasi yang pastinya menyenangkan bagi Anda dan keluarga.</p>
    <p>Terdapat lebih dari 28 display yang bisa Anda jumpai di SeaWorld, meliputi 9 akuarium air tawar, 4 kolam terbuka, dan 19 akuarium lainnya dengan berbagai jenis ikan. Terdapat pula wahana menantang seperti akuarium hiu, Jellyfish Sphere, hingga Museum Misteri Kehidupan Laut Dalam.</p>

    <p className="font-semibold mb-2">Ocean Dream Samudra</p>
    <p>Ocean Dream Samudra mengusung konsep taman bermain dan edukasi, menyuguhkan oceanarium terbesar di Indonesia. Di sini Anda bisa menyaksikan pentas lumba-lumba dan singa laut, peragaan satwa, hingga taman burung dari berbagai habitat.</p>
    <p>Selain menikmati berbagai pertunjukan satwa, Anda juga bisa menjajal beragam wahana seru seperti Cinema 5D, Istana Penguin, hingga Kids Playground.</p>

    <p className="font-semibold mb-2">Atlantis Water Adventure</p>
    <p>Nikmati serunya petualangan air di Atlantis Water Adventure. Kawasan wisata seluas 7 hektar ini menjadi salah satu tempat rekreasi air terfavorit. Selain karena tarif yang tergolong murah, Anda juga bisa menikmati berbagai wahana yang pastinya seru dan tak terlupakan.</p>
    <p>Di antara wahana yang tidak boleh terlewatkan ketika Anda berkunjung ke Atlantis adalah Asthatirta, Crazy Slide, Skybox, dan Dragon Race. Hadir pula Rainbow Splash Pool, Apollo Pool, hingga Elephant Pool yang bisa memuaskan keinginan Anda untuk bermain air.</p>

    <p className="font-semibold mb-2">Area Indoor dan Outdoor</p>
    <img src="resortjakarta.jpg" alt="Resort Jakarta" className="w-full h-48 object-cover mb-4" />
    <p>Selain menawarkan sederet sarana hiburan dan edukasi, Ancol juga memiliki area indoor dan outdoor yang bisa digunakan untuk berbagai keperluan, seperti gathering perusahaan, pertemuan bisnis, pesta pernikahan, hingga konser.</p>

    {/* Kuliner dan Wisata Belanja */}
    <p className="font-semibold mb-2">Kuliner dan Wisata Belanja</p>
    <img src="kulinerjakarta.jpg" alt="Kuliner Jakarta" className="w-full h-48 object-cover mb-4" />
    <p>Selama berkunjung ke Ancol, jangan lewatkan berbagai pilihan kuliner khas Jakarta dan belanja barang-barang unik dari berbagai toko yang ada di sekitar kawasan Ancol.</p>
  </main>
);

// Komponen App Utama
function App() {
  return (
    <BrowserRouter>
      <div className="App font-sans">
        <Header />
        <BlogContent />
      </div>
    </BrowserRouter>
  );
}

export default App;

