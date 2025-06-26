import Link from "next/link"
import Image from "next/image"
import { X, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full flex flex-col items-center">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harezmi_satranc_logo-gKaFEkOBRKCDvHDg3r79pi9FHGyI51.jpeg"
                alt="Piyonist Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">Piyonist</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI destekli satranç koçluk sistemi ile satrançta yeni bir çağ başlatıyoruz.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/PiyonistSatranc" className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/piyonist.satranc/" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/piyonist-satranc" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ürünler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/engine" className="text-gray-400 hover:text-white">
                  Satranç Motoru
                </Link>
              </li>
              <li>
                <Link href="/products/coaching" className="text-gray-400 hover:text-white">
                  AI Koçluk
                </Link>
              </li>
              <li>
                <Link href="/products/app" className="text-gray-400 hover:text-white">
                  Mobil Uygulama
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/tutorials" className="text-gray-400 hover:text-white">
                  Eğitimler
                </Link>
              </li>
              <li>
                <Link href="/resources/careers" className="text-gray-400 hover:text-white">
                  Ekibe Katıl
                </Link>
              </li>
              <li>
                <Link href="/resources/social" className="text-gray-400 hover:text-white">
                  Sosyal Medya
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>piyonistsatranc2025@gmail.com </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Piyonist. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
