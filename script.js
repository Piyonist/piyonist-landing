const spotlight = document.querySelector('.global-spotlight');

if (spotlight) {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        spotlight.style.transform = `translate(${x - spotlight.offsetWidth / 2}px, ${y - spotlight.offsetHeight / 2}px)`;
    });

    document.body.addEventListener('mouseenter', () => {
        spotlight.style.opacity = '1';
    });

    
    document.body.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
    });
}
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const fadeElems = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElems.forEach(el => {
        observer.observe(el);
    });

});
const form = document.getElementById('early-access-form');

async function handleSubmit(event) {
    event.preventDefault(); 
    
    const ctaWrapper = document.getElementById('cta-content-wrapper');
    const statusMessage = document.createElement('p'); 
    statusMessage.style.marginTop = '1.5rem';

    const data = new FormData(event.target);
    
    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
           
            form.style.display = 'none';
            const h2 = ctaWrapper.querySelector('h2');
            h2.innerText = 'Teşekkür Ederiz!';
            const p = ctaWrapper.querySelector('p');
            p.innerText = 'Piyonist\'in lansman haberlerini ilk siz alacaksınız. E-posta kutunuzu kontrol etmeyi unutmayın!';
        } else {
    
            const responseData = await response.json();
            if (responseData.hasOwnProperty('errors')) {
                statusMessage.innerText = responseData.errors.map(error => error.message).join(", ");
            } else {
                statusMessage.innerText = "Oops! Bir sorun oluştu. Lütfen tekrar deneyin.";
            }
            form.appendChild(statusMessage);
        }
    } catch (error) {
        statusMessage.innerText = "Oops! Bir ağ hatası oluştu. Lütfen tekrar deneyin.";
        form.appendChild(statusMessage);
    }
}

if (form) {
    form.addEventListener("submit", handleSubmit);
}
const noActionLinks = document.querySelectorAll('.no-action');

noActionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            
            const wasActive = item.classList.contains('active');
            
            
            faqItems.forEach(i => {
                i.classList.remove('active');
            });

            
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
}

const translations = {
    en: {
        'nav-early-access-btn': 'Join Early Access',
        'hero-title': 'Path to Chess Mastery: <br> Your Personal AI Coach.',
        'hero-description': 'Analyze your moves in real time with Piyonist, instantly discover strategic mistakes, and elevate your game with personalized training that unleashes your potential.',
        'hero-early-access-btn': 'Join Early Access',
        'hero-how-it-works-btn': 'How It Works? ↓',
        'sponsors-title': "BELIEVERS IN TURKEY'S FUTURE", 
        'features-title': 'Technology Transforming Your Game',
        'features-description': "Push the limits of your chess with Piyonist's innovative features.",
        'feature1-title': 'Real-Time Move Analysis',
        'feature1-desc': 'As you play, our AI evaluates every move instantly. See your opponent\'s potential responses and the strongest counter-moves within seconds.',
        'feature2-title': 'Strategic Error Detection',
        'feature2-desc': 'Illuminates not only obvious mistakes but also overlooked tactical opportunities and positional weaknesses.',
        'feature3-title': 'Personalized Training Plan',
        'feature3-desc': 'Piyonist suggests tailored training programs, puzzles, and strategy lessons based on your playing style and frequent mistakes.',
        'story-title': 'From a Dream to a National Mission',
        'story-p1': "Piyonist is the dream of a dedicated team of high-school students from all over Turkey who love technology and chess. Our goal is not just to develop a chess engine, but to merge AI technologies with chess education and contribute to our country's advancement in this field.",
        'story-p2': 'With the support of the Ministry of National Education of the Republic of Turkey and the Turkish Chess Federation, we aim to help chess players of all ages reach their full potential.',
        'cta-title': 'Ready for a New Era in Chess?',
        'cta-description': "Join our early-access program now to witness Piyonist's development and become part of this revolution from day one.",
        'cta-email-input': 'Enter your email address',
        'cta-submit-btn': 'Add Me to the List',
        'faq-title': 'Frequently Asked Questions',
        'faq-description': 'Answers to the questions you might have about Piyonist.',
        'faq1-question': 'What exactly does Piyonist do?',
        'faq1-answer': 'Piyonist is an AI coach that analyzes your chess games during or after play. It rates the strength of your moves, highlights your critical mistakes, and offers personalized training suggestions based on your playing style to help you become a better player.',
        'faq2-question': 'Who is Piyonist for?',
        'faq2-answer': 'Piyonist is designed for every chess enthusiast, from absolute beginners to intermediate tournament players. If your goal is to uncover blind spots in your game and improve your strategic thinking, Piyonist is the perfect tool for you.',
        'faq3-question': 'Do I need technical knowledge to use it?',
        'faq3-answer': 'No, absolutely not. Piyonist offers a highly user-friendly interface. Upload the PGN of the game you\'ve played or play directly on the platform to start the analysis. All complex calculations are performed automatically in the background.',
        'faq4-question': 'Will Piyonist be free?',
        'faq4-answer': 'We plan to offer special advantages to users who join the early-access program and support us in the initial stage of the project. We are working on a model where the core analysis features of the platform will be free. Details will be finalized at launch.',
        'footer-text': '© 2024 Piyonist. All rights reserved.<br>Developed by Turkey\'s young minds. 🇹🇷',
        'footer-about-link': 'About',
        'footer-faq-link': 'FAQ',
        'footer-contact-link': 'Contact'
    },
    tr: {
        'nav-early-access-btn': 'Erken Erişime Katıl',
        'hero-title': 'Satrançta Ustalığa Giden Yol: <br> Kişisel Yapay Zeka Koçunuz.',
        'hero-description': 'Piyonist ile hamlelerinizi gerçek zamanlı analiz edin, stratejik hatalarınızı anında keşfedin ve potansiyelinizi ortaya çıkaracak kişiselleştirilmiş eğitimlerle oyununuzu zirveye taşıyın.',
        'hero-early-access-btn': 'Erken Erişime Katıl',
        'hero-how-it-works-btn': 'Nasıl Çalışır? ↓',
        'sponsors-title': 'TÜRKİYE\'NİN GELECEĞİNE GÜVENENLER',
        'features-title': 'Oyununuzu Dönüştüren Teknoloji',
        'features-description': "Satrançtaki sınırlarınızı Piyonist'in yenilikçi özellikleriyle aşın.",
        'feature1-title': 'Gerçek Zamanlı Hamle Analizi',
        'feature1-desc': 'Siz oynarken yapay zekamız her hamlenizi anında değerlendirir. Rakibinizin potansiyel cevaplarını ve en güçlü karşı hamleleri saniyeler içinde görün.',
        'feature2-title': 'Stratejik Hata Tespiti',
        'feature2-desc': 'Sadece bariz hataları değil, gözden kaçan taktiksel fırsatları ve pozisyonel zayıflıkları da belirleyerek kör noktalarınızı aydınlatır.',
        'feature3-title': 'Size Özel Eğitim Planı',
        'feature3-desc': 'Piyonist, oyun stilinize ve sık yaptığınız hatalara göre size özel antrenman programları, bulmacalar ve strateji dersleri önerir.',
        'story-title': 'Bir Hayalden Ulusal Bir Hedefe',
        'story-p1': 'Piyonist, Türkiye\'nin dört bir yanından gelen, teknoloji ve satranç tutkunu lise öğrencilerinden oluşan güçlü bir ekibin hayalidir. Amacımız, sadece bir satranç motoru geliştirmek değil, aynı zamanda yapay zekâ teknolojilerini satranç eğitimiyle birleştirerek ülkemizin bu alandaki gelişimine katkıda bulunmaktır.',
        'story-p2': 'T.C. Millî Eğitim Bakanlığı ve Türkiye Satranç Federasyonu gibi değerli kurumların desteğiyle, her yaştan satranç oyuncusunun kendi potansiyelinin zirvesine ulaşmasına yardımcı olmayı hedefliyoruz.',
        'cta-title': 'Satrançta Yeni Bir Çağa Hazır mısınız?',
        'cta-description': "Piyonist'in gelişimine tanıklık etmek ve bu devrimin ilk parçası olmak için erken erişim programımıza şimdi katılın.",
        'cta-email-input': 'E-posta adresinizi girin',
        'cta-submit-btn': 'Beni Listeye Ekle',
        'faq-title': 'Sıkça Sorulan Sorular',
        'faq-description': 'Piyonist hakkında aklınıza takılabilecek soruların cevapları.',
        'faq1-question': 'Piyonist tam olarak ne işe yarıyor?',
        'faq1-answer': 'Piyonist, satranç maçlarınızı oynarken veya sonrasında analiz eden bir yapay zeka koçudur. Hamlelerinizin gücünü ölçer, yaptığınız kritik hataları size gösterir ve oyun tarzınıza göre kişiselleştirilmiş eğitim önerileri sunarak daha iyi bir oyuncu olmanıza yardımcı olur.',
        'faq2-question': 'Piyonist kimler için uygun?',
        'faq2-answer': 'Piyonist, satranca yeni başlayanlardan orta seviyedeki turnuva oyuncularına kadar her seviyeden satranç meraklısı için tasarlanmıştır. Amacınız oyununuzdaki kör noktaları keşfetmek ve stratejik düşünme yeteneğinizi geliştirmekse, Piyonist sizin için ideal bir araçtır.',
        'faq3-question': 'Kullanmak için teknik bilgi gerekiyor mu?',
        'faq3-answer': 'Hayır, kesinlikle gerekmiyor. Piyonist, son derece kullanıcı dostu bir arayüze sahiptir. Oynadığınız maçın PGN dosyasını yüklemek veya platformda oynamak, analizi başlatmak için yeterlidir. Tüm karmaşık analizler arka planda, sizin için otomatik olarak yapılır.',
        'faq4-question': 'Piyonist ücretsiz mi olacak?',
        'faq4-answer': 'Erken erişim programına katılan kullanıcılarımıza ve projenin başlangıç aşamasında bize destek olanlara özel avantajlar sunmayı planlıyoruz. Platformun temel analiz özellikleri ücretsiz olacak şekilde bir model üzerinde çalışıyoruz. Detaylar lansman tarihinde netleşecektir.',
        'footer-text': '© 2024 Piyonist. Tüm hakları saklıdır.<br>Türkiye\'nin genç beyinleri tarafından geliştirilmiştir. 🇹🇷',
        'footer-about-link': 'Hakkında',
        'footer-faq-link': 'S.S.S',
        'footer-contact-link': 'İletişim'
    }
};

function applyTranslations(lang) {
    const texts = translations[lang];
    Object.keys(texts).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'INPUT') {
            el.placeholder = texts[id];
        } else {
            el.innerHTML = texts[id];
        }
    });

    
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations('en');

    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            applyTranslations(selectedLang);
        });
    }
});

const tel = document.getElementById('tlfnmr');
let visib = false;
const contactLink = document.getElementById('footer-contact-link');
if (contactLink) {
    contactLink.addEventListener('click', function tik() {
        if (visib) {
            tel.style.display = 'none';
        } else {
            tel.style.display = 'flex';
        }
        visib = !visib;
    });
}