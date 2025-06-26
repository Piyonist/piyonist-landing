import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Bot, Zap, Target, Database, CheckCircle, ArrowRight, Brain, Settings } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Yerli ve Milli Motor",
    description: "Tamamen Türkiye'de geliştirilen, Stockfish'e alternatif güçlü satranç motoru",
  },
  {
    icon: Brain,
    title: "Gelişmiş AI Mimarisi",
    description: "Transformer ve CNN mimarilerinin test edildiği en uygun model yapısı",
  },
  {
    icon: Database,
    title: "Geniş Veri Seti",
    description: "Lichess Elite Database ve Grandmaster turnuva arşivlerinden toplanan veriler",
  },
  {
    icon: Zap,
    title: "Hızlı Analiz",
    description: "Optimize edilmiş cevap süresi ile gerçek zamanlı pozisyon değerlendirmesi",
  },
  {
    icon: Target,
    title: "Üstün Performans",
    description: "Mevcut motorların ötesinde pozisyon değerlendirmesi ve hamle önerileri",
  },
  {
    icon: Settings,
    title: "Özelleştirilebilir",
    description: "Farklı zorluk seviyeleri ve oyun stillerine uyarlanabilir yapı",
  },
]

const specifications = [
  { label: "Motor Tipi", value: "Neural Network Hybrid" },
  { label: "Desteklenen Formatlar", value: "UCI, FEN, PGN" },
  { label: "Maksimum Derinlik", value: "40+ ply" },
  { label: "Pozisyon/Saniye", value: "1M+ nodes" },
  { label: "Açılış Kitaplığı", value: "500,000+ pozisyon" },
  { label: "Platform Desteği", value: "Windows, Linux, macOS" },
]

const developmentStages = [
  { stage: "Veri Toplama", progress: 85, status: "Tamamlandı" },
  { stage: "Veri İşleme", progress: 70, status: "Devam Ediyor" },
  { stage: "Model Eğitimi", progress: 45, status: "Devam Ediyor" },
  { stage: "Optimizasyon", progress: 20, status: "Planlanan" },
  { stage: "Test & Doğrulama", progress: 10, status: "Planlanan" },
]

export default function ChessEnginePage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">Türk Satranç Motoru</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Chess.com ve Lichess'in kullandığı Stockfish benzeri motorların ötesinde, pozisyon değerlendirmesi ve hamle
            önerilerinde üstün performans gösteren özel motor geliştiriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Erken Erişim İste</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#technical-details">Teknik Detaylar</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-8 rounded-2xl border border-blue-100/50 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Development Process */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Geliştirme Süreci</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {developmentStages.map((stage, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{stage.stage}</h3>
                      <Badge
                        variant={
                          stage.status === "Tamamlandı"
                            ? "default"
                            : stage.status === "Devam Ediyor"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {stage.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>İlerleme</span>
                        <span>{stage.progress}%</span>
                      </div>
                      <Progress value={stage.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div> */}

        {/* Technical Specifications */}
        {/* <div id="technical-details" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Teknik Özellikler</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Motor Özellikleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Geliştirme Yaklaşımı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Mimari Karşılaştırması</h4>
                      <p className="text-sm text-gray-600">Transformer, CNN ve hibrit mimarilerin test edilmesi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Veri Çeşitliliği</h4>
                      <p className="text-sm text-gray-600">Farklı oyuncu profillerinden geniş dataset oluşturma</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Optimizasyon</h4>
                      <p className="text-sm text-gray-600">Hiperparametre optimizasyonu ve performans iyileştirme</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Cevap Süresi</h4>
                      <p className="text-sm text-gray-600">Gerçek zamanlı analiz için optimize edilmiş performans</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div> */}

        {/* Integration Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Entegrasyon</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Geliştirdiğimiz satranç motoru, fullstack satranç uygulamamızda oyunların analiz edilmesinde kullanılacak.
            UCI protokolü desteği ile mevcut satranç arayüzleriyle uyumlu çalışır.
          </p>
          <Button size="lg" asChild>
            <Link href="/products/app">
              Fullstack Uygulama
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
