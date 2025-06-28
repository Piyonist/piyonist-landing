"use client";

import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { createContext, useContext, useState } from "react";

const translations = {
  EN: {
    title: "Piyonist",
    join: "Join Early Access",
    leftTitle: "The Path to Mastery in Chess:",
    leftSubtitle: "Your Personal AI Coach.",
    rightText: "Analyze your moves in real-time with Piyonist, instantly discover your strategic mistakes, and elevate your game to its peak with personalized training that will unlock your potential."
  },
  TR: {
    title: "Piyonist",
    join: "Erken Erişime Katıl",
    leftTitle: "Satrançta Ustalığa Giden Yol:",
    leftSubtitle: "Kişisel Yapay Zeka Koçunuz.",
    rightText: "Piyonist ile hamlelerinizi gerçek zamanlı analiz edin, stratejik hatalarınızı anında keşfedin ve potansiyelinizi ortaya çıkaracak kişiselleştirilmiş eğitimlerle oyununuzu zirveye taşıyın."
  }
};

const LangContext = createContext();

function useLang() {
  return useContext(LangContext);
}

export default function Home() {
  const [lang, setLang] = useState("EN");
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#7a3e0d] to-[#c97b2b] relative  pt-24">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-center px-4 sm:px-8">
            {/* Left Inspirational Text */}
            <div className="flex-1 text-center max-w-xs text-white/80 select-none hidden sm:block font-poppins">
              <h1 id="hero-title" className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{t.leftTitle}<br/>{t.leftSubtitle}</h1>
            </div>

            {/* Main content with pawns */}
            <div className="relative w-full h-[66vh] max-w-3xl flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-full h-full max-w-4xl">
                    <div className="absolute left-0 top-0 w-full h-full animate-pawn-left z-20">
                      <div className="relative w-full h-full">
                        <Image
                          src="/assests/images/pawn-placeholder.png"
                          alt="Pawn Left"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'contain', transform: "rotate(-15deg)" }}
                          priority
                        />
                      </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full animate-pawn-right z-10">
                      <div className="relative w-full h-full">
                        <Image
                          src="/assests/images/pawn-placeholder.png"
                          alt="Pawn Right"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'contain', transform: "rotate(10deg)" }}
                          priority
                        />
                      </div>
                    </div>
                    <div className="relative z-30 flex flex-col items-center justify-center h-full">
                      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white drop-shadow-lg font-serif select-none mb-8">{t.title}</h1>
                      <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 backdrop-blur-sm text-lg shadow-lg mb-4">
                        {t.join}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Inspirational Text */}
            <div className="flex-1 text-center max-w-xs text-white/80 select-none hidden sm:block font-poppins">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">{t.rightText}</p>
            </div>
          </div>
        </div>
      </div>
      {/* What does Piyonist promise section OUTSIDE hero flex */}
      <div className="max-w-7xl w-full mx-auto mt-56 mb-56 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">
          {lang === "TR" ? "Piyonist ne vaad ediyor?" : "What does Piyonist promise?"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-8">
          {/* Feature 1 */}
          <div className="rounded-2xl p-6 flex flex-col items-center shadow-lg backdrop-blur-md border border-white/20 transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
            <div className="mb-4">
              <Image src="/window.svg" alt="AI Analysis" width={48} height={48} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {lang === "TR" ? "Gerçek Zamanlı Hamle Analizi" : "Real-Time Move Analysis"}
            </h3>
            <p className="text-white/80 text-center">
              {lang === "TR"
                ? "Hamlelerinizi anında analiz edin, stratejik hatalarınızı tespit edin."
                : "Instantly analyze your moves and detect your strategic mistakes."}
            </p>
          </div>
          {/* Feature 2 */}
          <div className="rounded-2xl p-6 flex flex-col items-center shadow-lg backdrop-blur-md border border-white/20 transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
            <div className="mb-4">
              <Image src="/globe.svg" alt="Personalized Training" width={48} height={48} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {lang === "TR" ? "Kişiselleştirilmiş Eğitim" : "Personalized Training"}
            </h3>
            <p className="text-white/80 text-center">
              {lang === "TR"
                ? "Oyununuza özel eğitimlerle potansiyelinizi ortaya çıkarın."
                : "Unlock your potential with training tailored to your game."}
            </p>
          </div>
          {/* Feature 3 */}
          <div className="rounded-2xl p-6 flex flex-col items-center shadow-lg backdrop-blur-md border border-white/20 transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
            <div className="mb-4">
              <Image src="/file.svg" alt="Progress Tracking" width={48} height={48} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {lang === "TR" ? "Gelişim Takibi" : "Progress Tracking"}
            </h3>
            <p className="text-white/80 text-center">
              {lang === "TR"
                ? "Gelişiminizi detaylı grafiklerle takip edin."
                : "Track your progress with detailed insights and charts."}
            </p>
          </div>
        </div>
      </div>
      {/* What distinguishes us section */}
      <div className="max-w-4xl w-full mx-auto mb-60 px-4 mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
          {lang === "TR" ? "Bizi Diğer Satranç Motorlarından Ayıran Özellikler" : "What distinguishes us from other chess engines?"}
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-center text-white/80 mb-12 max-w-2xl mx-auto">
          {lang === "TR"
            ? "Piyonist, kişiselleştirilmiş analiz, gerçek zamanlı öneriler ve topluluk odaklı yaklaşımıyla sıradan satranç motorlarından ayrılır."
            : "Piyonist stands out with personalized analysis, real-time recommendations, and a community-driven approach that goes beyond ordinary chess engines."}
        </p>
      </div>  

      {/* Featured Section */}
      <div className="max-w-6xl w-full mx-auto mb-32 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-left text-white mb-12 drop-shadow-lg flex items-center gap-3">
          <span className="text-5xl">🎯</span> {lang === "TR" ? "Satranç İçgörülerinden Harekete Geçin" : "Take Action from Chess Insights"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Card 1 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer">
            <div className="text-3xl mb-6 text-amber-300">🗃</div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{lang === "TR" ? "Sezgisel Performans Panelleri" : "Intuitive Performance Dashboards"}</h3>
              <p className="text-white/70 text-lg">{lang === "TR" ? "Açılış, oyun ortası ve oyun sonu istatistiklerinizi tek bir yerde görselleştirin—açılışlara göre kazanma oranları, ortalama centipawn kaybı ve zaman kullanımı, hiçbir kurulum veya kodlama gerekmeden." : "Visualize your opening, middlegame and endgame stats in one place—see win-rates by opening, average centipawn loss, and time usage without any setup or coding."}</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer">
            <div className="text-3xl mb-6 text-amber-300">📈</div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{lang === "TR" ? "Hamle Hamle Canlı Analiz" : "Live Move-by-Move Analysis"}</h3>
              <p className="text-white/70 text-lg">{lang === "TR" ? "Oynarken veya incelerken her hamlede anında geri bildirim alın: alternatif varyantlar, vurgulanan taktiksel hatalar ve motorun önerdiği iyileştirmeler gerçek zamanlı olarak sunulur." : "Get instant feedback on each move as you play or review: alternative lines, tactical blunders highlighted, and engine-suggested refinements all in real time."}</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer">
            <div className="text-3xl mb-6 text-amber-300">✨</div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{lang === "TR" ? "İşbirlikçi Eğitim Seansları" : "Collaborative Training Sessions"}</h3>
              <p className="text-white/70 text-lg">{lang === "TR" ? "Anotasyonlu oyunlarınızı ve gelişim grafiklerinizi antrenörler veya çalışma arkadaşlarınızla paylaşın. Anahtar pozisyonlara yorum yapın, varyantları karşılaştırın ve birlikte repertuar planları oluşturun." : "Share your annotated games and progress charts with coaches or study partners. Comment on key positions, compare lines, and co-build repertoire plans together."}</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer">
            <div className="text-3xl mb-6 text-amber-300">📉</div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{lang === "TR" ? "Otomatik Gelişim Raporları" : "Automated Progress Reports"}</h3>
              <p className="text-white/70 text-lg">{lang === "TR" ? "Haftalık özetleri doğrudan gelen kutunuza alın: temel güçlü yönler, tekrar eden hatalar, kilometre taşı başarıları ve kişiselleştirilmiş bulmaca önerileri—manuel takip gerekmez." : "Receive weekly summaries straight to your inbox: key strengths, recurring mistakes, milestone achievements, and personalized puzzle recommendations—no manual tracking required."}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Kind Words from Customers Section */}
      <div className="max-w-7xl w-full mx-auto mb-56 px-4 mt-56">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">
          {lang === "TR" ? "Müşterilerimizden Güzel Sözler" : "Kind Words from Customers"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Testimonial 1 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer min-h-[340px]">
            <Image src="/assests/images/pawn-placeholder.png" alt="Customer 1" width={56} height={56} className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Aylin K.</h3>
            <p className="text-white/80">{lang === "TR" ? "Piyonist sayesinde satrançta hızlıca gelişim gösterdim. Analizler çok detaylı ve anlaşılır!" : "Thanks to Piyonist, I improved quickly in chess. The analysis is detailed and easy to understand!"}</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer min-h-[340px]">
            <Image src="/assests/images/pawn-placeholder.png" alt="Customer 2" width={56} height={56} className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Emre T.</h3>
            <p className="text-white/80">{lang === "TR" ? "Gerçek zamanlı hamle analizi ve kişiselleştirilmiş eğitimler harika!" : "Real-time move analysis and personalized training are amazing!"}</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[#7a3e0d]/70 rounded-2xl p-14 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#7a3e0d]/90 hover:shadow-2xl cursor-pointer min-h-[340px]">
            <Image src="/assests/images/pawn-placeholder.png" alt="Customer 3" width={56} height={56} className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Selin D.</h3>
            <p className="text-white/80">{lang === "TR" ? "Topluluk etkinlikleri ve haftalık raporlar motivasyonumu artırdı." : "Community events and weekly reports boosted my motivation."}</p>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <FAQ lang={lang} />
      {/* Call to Action Section */}
      <div className="w-full bg-transparent py-20 flex flex-col items-center justify-center mb-32">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          {lang === "TR" ? "Satrançta gelişmeye hazır mısınız?" : "Ready to improve your chess?"}
        </h2>
        <p className="text-xl text-white/80 mb-8 text-center max-w-xl">
          {lang === "TR"
            ? "Piyonist'in kişiselleştirilmiş analiz ve gerçek zamanlı eğitim araçlarıyla satranç potansiyelinizi ortaya çıkarmak için ilk adımı atın."
            : "Take the first step to unlocking your chess potential with Piyonist's personalized analysis and real-time training tools."}
        </p>
        <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-lg">
          {lang === "TR" ? "Hemen Başla" : "Get Started"}
        </button>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#8d5524] text-white pt-16 pb-8 mt-32">
        <div className="max-w-6xl mx-auto px-4 md:px-24 flex flex-col md:flex-row justify-between gap-40 mb-12 ">
          <div>
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-2 text-white/80">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Sign in</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Social</h4>
            <ul className="space-y-2 text-white/80">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-2xl">♟️</span>
            <span className="font-bold text-lg">Piyonist</span>
          </div>
          <span className="text-white/50">© Piyonist {new Date().getFullYear()}</span>
        </div>
      </footer>
    </LangContext.Provider>
  );
}

export { LangContext, useLang };

// FAQ Accordion Component
function FAQ({ lang }) {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: lang === "TR" ? "Piyonist nedir?" : "What is Piyonist?",
      a: lang === "TR"
        ? "Piyonist, satranç oyuncuları için kişiselleştirilmiş analiz ve eğitim sunan bir yapay zeka platformudur."
        : "Piyonist is an AI platform offering personalized analysis and training for chess players."
    },
    {
      q: lang === "TR" ? "Piyonist'i kimler kullanabilir?" : "Who can use Piyonist?",
      a: lang === "TR"
        ? "Her seviyeden satranç oyuncusu Piyonist'i kullanabilir. Başlangıçtan ileri seviyeye kadar herkese uygundur."
        : "Chess players of all levels can use Piyonist, from beginners to advanced."
    },
    {
      q: lang === "TR" ? "Gerçek zamanlı analiz nasıl çalışıyor?" : "How does real-time analysis work?",
      a: lang === "TR"
        ? "Hamlelerinizi oynarken veya incelerken, Piyonist anında analiz ve öneriler sunar."
        : "As you play or review moves, Piyonist provides instant analysis and suggestions."
    },
    {
      q: lang === "TR" ? "Piyonist ücretsiz mi?" : "Is Piyonist free?",
      a: lang === "TR"
        ? "Piyonist'in temel özellikleri ücretsizdir, gelişmiş analiz ve eğitimler için premium seçenekler sunulmaktadır."
        : "Piyonist offers core features for free, with premium options for advanced analysis and training."
    }
  ];
  return (
    <div className="max-w-4xl w-full mx-auto mb-56 px-4 mt-56">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-amber-100">{lang === "TR" ? "Sıkça Sorulan Sorular" : "FAQs"}</h2>
      <p className="text-center text-white/70 mb-12 text-lg">{lang === "TR" ? "Piyonist hakkında merak ettikleriniz." : "Answers to questions you might have about Piyonist."}</p>
      <div className="space-y-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`bg-[#7a3e0d]/80 rounded-2xl px-10 py-8 flex items-center justify-between cursor-pointer transition-all duration-300 shadow-lg ${open === i ? 'ring-2 ring-amber-300' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex-1">
              <span className="text-lg sm:text-xl font-semibold text-white">{item.q}</span>
              {open === i && (
                <div className="mt-4 text-white/80 text-base sm:text-lg font-normal">{item.a}</div>
              )}
            </div>
            <span className={`ml-6 text-3xl text-amber-300 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
