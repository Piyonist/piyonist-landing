import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Target } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 sm:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Türkiye'nin İlk AI Destekli Satranç Koçu
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Satrançta Yeni Bir Çağ:
            <span className="text-orange-600"> AI ile Öğren</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Piyonist, hamlelerinizi gerçek zamanlı analiz eden, stratejik hatalarınızı tespit eden ve kişiye özel eğitim
            önerileri sunan yapay zeka destekli satranç koçluk sistemidir.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Ücretsiz Dene</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">Ürünleri İncele</Link>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-orange-100 p-3 mb-4">
                <Brain className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold">AI Analiz</h3>
              <p className="text-sm text-gray-600 text-center">Hamlelerinizi gerçek zamanlı analiz eder</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-orange-100 p-3 mb-4">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold">Hata Tespiti</h3>
              <p className="text-sm text-gray-600 text-center">Stratejik hatalarınızı anında tespit eder</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-orange-100 p-3 mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold">Kişisel Eğitim</h3>
              <p className="text-sm text-gray-600 text-center">Size özel eğitim önerileri sunar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
