import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Başlangıç",
    price: "Ücretsiz",
    description: "Piyonist'i keşfetmek için ideal",
    features: [
      "Temel satranç motoru erişimi",
      "Günde 10 hamle analizi",
      "Temel eğitim materyalleri",
      "Topluluk desteği",
    ],
    cta: "Ücretsiz Başla",
    popular: false,
  },
  {
    name: "Pro",
    price: "belirlenmedi/ay",
    description: "Ciddi satranç oyuncuları için",
    features: [
      "Tam satranç motoru erişimi",
      "Sınırsız hamle analizi",
      "AI koçluk sistemi",
      "Kişisel gelişim takibi",
      "Öncelikli destek",
      "Mobil uygulama",
    ],
    cta: "Pro'ya Geç",
    popular: true,
  },
  {
    name: "Takım",
    price: "belirlenmedi/ay",
    description: "Satranç kulüpleri ve okullar için",
    features: [
      "Tüm Pro özellikler",
      "10 kullanıcıya kadar",
      "Takım yönetimi paneli",
      "Toplu analiz raporları",
      "Özel eğitim programları",
      "Turnuva hazırlık modülü",
    ],
    cta: "Takım Planını Seç",
    popular: false,
  },
]

const faqs = [
  {
    question: "Ücretsiz plan ne kadar süre kullanılabilir?",
    answer:
      "Ücretsiz planımız süresiz kullanılabilir. Ancak günlük analiz limitleri ve bazı gelişmiş özellikler kısıtlıdır.",
  },
  {
    question: "Ödeme yöntemleri nelerdir?",
    answer: "Kredi kartı, banka kartı ve havale ile ödeme yapabilirsiniz. Tüm ödemeler güvenli SSL ile korunmaktadır.",
  },
  {
    question: "İptal etmek istersem ne olur?",
    answer:
      "İstediğiniz zaman planınızı iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar hizmet almaya devam edersiniz.",
  },
  {
    question: "Öğrenci indirimi var mı?",
    answer: "Evet! Öğrenciler için %50 indirim sunuyoruz. Öğrenci belgenizi göndererek indirimden yararlanabilirsiniz.",
  },
  {
    question: "Kurumsal çözümler sunuyor musunuz?",
    answer:
      "Evet, satranç okulları ve kulüpler için özel kurumsal paketlerimiz bulunmaktadır. Detaylar için iletişime geçin.",
  },
  {
    question: "Mobil uygulama hangi platformlarda çalışır?",
    answer:
      "iOS ve Android platformlarında çalışan native uygulamalarımız mevcuttur. App Store ve Google Play'den indirebilirsiniz.",
  },
]

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Fiyatlandırma</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            İhtiyaçlarınıza uygun planı seçin ve satranç yolculuğunuza başlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  {plan.popular && (
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      <Star className="w-3 h-3 mr-1" />
                      Popüler
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${plan.popular ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sıkça Sorulan Sorular</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hala Karar Veremediniz mi?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Piyonist\'in tüm özelliklerini 14 gün boyunca ücretsiz deneyin. Kredi kartı bilgisi gerektirmez.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">14 Günlük Ücretsiz Deneme</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
