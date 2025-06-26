import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, BarChartIcon as ChartBar, Users, Smartphone, BookOpen, Trophy } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Türk Satranç Motoru",
    description: "Yerli ve milli satranç motoru ile güçlü analiz yapın",
    badge: "Motor",
  },
  {
    icon: ChartBar,
    title: "Gerçek Zamanlı Analiz",
    description: "Oyun sırasında hamlelerinizi anında değerlendirin",
    badge: "Analiz",
  },
  {
    icon: Users,
    title: "Kişisel Koçluk",
    description: "AI destekli kişiye özel eğitim programları",
    badge: "Koçluk",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "Her yerden erişim sağlayın, sürekli öğrenin",
    badge: "Mobil",
  },
  {
    icon: BookOpen,
    title: "Eğitim Materyalleri",
    description: "Kapsamlı eğitim içerikleri ve stratejiler",
    badge: "Eğitim",
  },
  {
    icon: Trophy,
    title: "Turnuva Hazırlığı",
    description: "Turnuvalar için özel hazırlık programları",
    badge: "Turnuva",
  },
]

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-orange-200 text-orange-800">
            Özellikler
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Neden Piyonist?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Modern teknoloji ile geleneksel satranç eğitimini birleştirerek, öğrenme deneyiminizi bir üst seviyeye
            taşıyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 hover:bg-white hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 p-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 bg-orange-100 text-orange-700 border-orange-200 text-xs"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
