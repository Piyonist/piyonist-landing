import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  Smartphone,
  Users,
  Bot,
  Puzzle,
  Trophy,
  CheckCircle,
  ArrowRight,
  Monitor,
  Gamepad2,
  BarChart3,
  MessageSquare,
  Github,
  Code,
} from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Oyun Oynama",
    description: "Arkadaşlarınızla veya rastgele oyuncularla online satranç oynayın",
  },
  {
    icon: Puzzle,
    title: "Bulmaca Çözme",
    description: "Binlerce satranç bulmacası ile taktik becerilerinizi geliştirin",
  },
  {
    icon: Bot,
    title: "AI Motor Entegrasyonu",
    description: "Geliştirdiğimiz Türk satranç motoruna karşı oynayın",
  },
  {
    icon: MessageSquare,
    title: "AI Koçluk",
    description: "Yapay zeka destekli kişisel satranç koçu ile öğrenin",
  },
  {
    icon: BarChart3,
    title: "Analiz Araçları",
    description: "Oyunlarınızı detaylı analiz edin ve hatalarınızı keşfedin",
  },
  {
    icon: Trophy,
    title: "Turnuvalar",
    description: "Online turnuvalara katılın ve diğer oyuncularla yarışın",
  },
]

const platforms = [
  {
    name: "Web Uygulaması",
    description: "Modern, responsive web arayüzü",
    status: "MVP Geliştirme",
    icon: Monitor,
    features: ["Responsive tasarım", "PWA desteği", "Çapraz platform uyumluluğu"],
  },
  {
    name: "Mobil Uygulama",
    description: "iOS ve Android native uygulamalar",
    status: "Planlanan",
    icon: Smartphone,
    features: ["Native performans", "Offline mod", "Push bildirimler"],
  },
]

const techStack = [
  { category: "Frontend", technologies: ["React/Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", technologies: ["Node.js", "Python", "PostgreSQL"] },
  { category: "AI/ML", technologies: ["TensorFlow", "PyTorch", "Custom Models"] },
  { category: "Real-time", technologies: ["WebSocket", "LiveKit", "Redis"] },
]

const competitorFeatures = [
  { feature: "Online Oyun", chess: true, lichess: true, piyonist: true },
  { feature: "Bulmacalar", chess: true, lichess: true, piyonist: true },
  { feature: "Analiz Motoru", chess: "Stockfish", lichess: "Stockfish", piyonist: "Türk Motor" },
  { feature: "AI Koçluk", chess: false, lichess: false, piyonist: true },
  { feature: "Sesli Eğitim", chess: false, lichess: false, piyonist: true },
  { feature: "Kişisel Profil", chess: "Temel", lichess: "Temel", piyonist: "Gelişmiş AI" },
]

export default function AppPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Fullstack Satranç Uygulaması
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Chess.com ve Lichess.org'un tüm özelliklerini kapsayan, bunlara ek olarak özel motor ve AI koç entegrasyonu
            olan modern web/mobile uygulaması.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Beta Erişim İste</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#features">Özellikleri İncele</Link>
            </Button>
          </div>
        </div>

        {/* Chess.com Inspiration */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">İlham Kaynağımız</h2>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Image
                  src="https://sjc.microlink.io/mybQ4m5mLWkzf-qDevdBQQF7Go59_W-BIQHgyIpISI8dTNxSqOela9tw_ttyZPLaByCRHlmpAc5EDaMXzlWVDA.jpeg"
                  alt="Chess.com Arayüzü"
                  width={800}
                  height={500}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Chess.com ve Lichess gibi popüler platformların en iyi özelliklerini alarak, bunlara Türk satranç motoru
                ve AI koçluk sistemi gibi yenilikçi özellikler ekliyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Uygulama Özellikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex gap-4 items-center">
                    <div className="rounded-lg bg-purple-100 p-3 w-fit">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Rekabet Analizi</h2>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Özellik Karşılaştırması</CardTitle>
              <CardDescription>Piyonist'in mevcut platformlara göre avantajları</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Özellik</th>
                      <th className="text-center py-3 px-4">Chess.com</th>
                      <th className="text-center py-3 px-4">Lichess</th>
                      <th className="text-center py-3 px-4 bg-orange-50">Piyonist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorFeatures.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{item.feature}</td>
                        <td className="text-center py-3 px-4">
                          {typeof item.chess === "boolean" ? (
                            item.chess ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                            ) : (
                              "❌"
                            )
                          ) : (
                            item.chess
                          )}
                        </td>
                        <td className="text-center py-3 px-4">
                          {typeof item.lichess === "boolean" ? (
                            item.lichess ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                            ) : (
                              "❌"
                            )
                          ) : (
                            item.lichess
                          )}
                        </td>
                        <td className="text-center py-3 px-4 bg-orange-50">
                          {typeof item.piyonist === "boolean" ? (
                            item.piyonist ? (
                              <CheckCircle className="h-4 w-4 text-orange-500 mx-auto" />
                            ) : (
                              "❌"
                            )
                          ) : (
                            <span className="font-medium text-orange-600">{item.piyonist}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
