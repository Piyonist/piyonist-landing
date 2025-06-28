"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLang } from "@/app/page";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 60) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-black/40 text-white p-4 z-50 flex items-center justify-between transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} backdrop-blur-md`}>
      <div className="flex items-center ml-8">
        <Image 
          src="/assests/images/logo.png" 
          alt="Piyonist Logo" 
          width={40} 
          height={40}
          className="mr-3"
        />
        <span className="text-xl font-bold font-serif">Piyonist</span>
      </div>


      <div className="flex items-center space-x-12 mr-8">

        <div className="relative">
          <button 
            onClick={() => setLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <span>{lang}</span>
            <svg className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {isLangMenuOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white/10 backdrop-blur-md rounded-md shadow-lg">
              <a 
                href="#" 
                className="block px-4 py-2 text-sm text-white hover:bg-white/20"
                onClick={(e) => { e.preventDefault(); setLang("EN"); setLangMenuOpen(false); }}
              >
                English
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-sm text-white hover:bg-white/20"
                onClick={(e) => { e.preventDefault(); setLang("TR"); setLangMenuOpen(false); }}
              >
                Turkish
              </a>
            </div>
          )}
        </div>


      </div>
    </nav>
  );
} 