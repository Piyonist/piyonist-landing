import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Bot, Brain, Smartphone, ArrowRight, Check } from "lucide-react"

const products = [
  {
    id: "engine",
    icon: Bot,
    title: "Satranç Motoru",
    description: "Güçlü Türk satranç motoru ile derinlemesine analiz yapın",
    features: [
      "Yerli ve milli satranç motoru",
      "Güçlü pozisyon değerlendirmesi",
      "Çoklu zorluk seviyesi",
      "Açılış kitaplığı desteği",
    ],
    badge: "Motor",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "coaching",
    icon: Brain,
    title: "AI Koçluk Sistemi",
    description: "Kişiye özel eğitim programları ve stratejik analiz",
    features: ["Gerçek zamanlı hamle analizi", "Hata tespit sistemi", "Kişisel gelişim takibi", "Stratejik öneriler"],
    badge: "AI",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "app",
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "Her yerden erişim sağlayın, sürekli öğrenin",
    features: ["iOS ve Android desteği", "Çevrimdışı çalışma modu", "Bulut senkronizasyonu", "Sosyal özellikler"],
    badge: "Mobil",
    color: "bg-green-100 text-green-600",
  },
]

export default function ProductsPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Ürünlerimiz</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Satranç deneyiminizi geliştirmek için tasarlanmış kapsamlı ürün ailemizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card
              key={product.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-lg p-3 ${product.color.replace("text-", "bg-").replace("600", "100")}`}>
                    <product.icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={`/products/${product.id}`}>
                    Detayları Gör
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tüm Ürünleri Bir Arada Deneyin</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Piyonist ekosisteminin tüm gücünden yararlanın. Satranç motoru, AI koçluk ve mobil uygulama ile satranç
            deneyiminizi maksimuma çıkarın.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Ücretsiz Deneme Başlat</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
