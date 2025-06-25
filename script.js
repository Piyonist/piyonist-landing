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
const tel = document.getElementById('tlfnmr');
let visib = false;
const tlf = document.getElementById('ilt').addEventListener("click",function tik(){
    if(visib == true){
        tel.style.display = "none";
    }
    if (visib != true){
        tel.style.display = "flex";
    }
    visib = !visib
    
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