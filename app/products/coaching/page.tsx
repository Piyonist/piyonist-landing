import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import {
  Mic,
  Brain,
  MessageSquare,
  Target,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Volume2,
  Eye,
  Settings,
  TrendingUp,
  BookOpen,
  Award,
  Clock,
} from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "Sesli Etkileşim",
    description: "LiveKit teknolojisi ile gerçek zamanlı ses işleme ve doğal konuşma",
  },
  {
    icon: Brain,
    title: "Akıllı Analiz",
    description: "RealTimeLLM ile konuşmalarınızı ve hamle tercihlerinizi analiz eder",
  },
  {
    icon: Target,
    title: "Kişisel Profil",
    description: "StudentProfile modülü ile öğrenme seviyenizi ve zayıf yönlerinizi tespit eder",
  },
  {
    icon: MessageSquare,
    title: "Dinamik Sorular",
    description: "PromptShaper ile size özel sorular ve öneriler üretir",
  },
  {
    icon: BarChart3,
    title: "Performans Takibi",
    description: "ToolSuite ile gelişiminizi sürekli izler ve raporlar",
  },
  {
    icon: Settings,
    title: "Özelleştirilebilir",
    description: "Fine-tuning pipeline ile kendi öğrenme stilinize uyarlanır",
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Ses Girişi",
    description: "LiveKit ile konuşmanızı metne dönüştürür",
    icon: Mic,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 2,
    title: "Tahta Analizi",
    description: "Anlık tahta pozisyonunu değerlendirir",
    icon: Eye,
    color: "bg-green-100 text-green-600",
  },
  {
    step: 3,
    title: "AI İşleme",
    description: "RealTimeLLM ile kapsamlı analiz yapar",
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: 4,
    title: "Profil Analizi",
    description: "Öğrenci profilinizi günceller",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    step: 5,
    title: "Özel Öneriler",
    description: "Size özel eğitim önerileri sunar",
    icon: Target,
    color: "bg-red-100 text-red-600",
  },
]

const apiProviders = [
  {
    name: "Gemini 2.0 Flash",
    type: "Test Amaçlı",
    status: "Ücretsiz",
    features: ["Hızlı yanıt", "Çoklu dil desteği", "Gerçek zamanlı"],
  },
  {
    name: "GPT-4o",
    type: "Üretim",
    status: "Premium",
    features: ["Üstün performans", "Gelişmiş analiz", "Doğal konuşma"],
  },
]

const learningScenarios = [
  {
    title: "Açılış Eğitimi",
    description: "AI koçunuz ile popüler açılışları öğrenin",
    example: '"Bu pozisyonda neden e4 yerine d4 oynamalıyım?" sorunuza detaylı açıklama alın.',
    duration: "15-20 dk",
    level: "Başlangıç",
  },
  {
    title: "Taktik Analizi",
    description: "Karmaşık pozisyonlarda taktik fırsatları keşfedin",
    example: '"Burada bir kombinasyon var mı?" diye sorun, AI size adım adım göstersin.',
    duration: "10-15 dk",
    level: "Orta",
  },
  {
    title: "Final Teknikleri",
    description: "Oyun sonu tekniklerini uygulamalı öğrenin",
    example: '"Bu final nasıl kazanılır?" sorusuna pratik çözümler alın.',
    duration: "20-25 dk",
    level: "İleri",
  },
]

const studentProgress = [
  { skill: "Açılış Bilgisi", current: 75, target: 90 },
  { skill: "Taktik Görme", current: 60, target: 85 },
  { skill: "Pozisyonel Anlayış", current: 45, target: 70 },
  { skill: "Final Teknikleri", current: 30, target: 65 },
]

export default function CoachingPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">AI Destekli Satranç Koçu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Kişiye özel bir deneyim sunan, özel ders niteliğinde bir satranç koçu. Aynen özel dersteymiş gibi satranç
            koçumuzla bir satranç tahtası üzerinden ders yapın, sohbet edin, interaktif olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Play className="mr-2 h-4 w-4" />
                Demo İzle
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#workflow">
                <Brain className="mr-2 h-4 w-4" />
                Nasıl Çalışır?
              </Link>
            </Button>
          </div>
        </div>

        {/* System Architecture */}
        <div id="workflow" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistem Mimarisi</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AI destekli satranç koçu sisteminin çalışma prensipleri ve teknoloji altyapısı
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 rounded-3xl p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md mb-6">
                  <Brain className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-gray-800">Gelişmiş AI Teknolojisi</span>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Destekli%20Satran%C3%A7%20Ko%C3%A7u%20Sistmei-sKzY7raL6vpCKWdbdjMjVFkhkNPmUo.png"
                  alt="AI Destekli Satranç Koçu Sistem Mimarisi"
                  width={900}
                  height={450}
                  className="mx-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Kullanıcının konuşma verilerini ve tahtanın anlık konumunu alarak gerçek zamanlı dil modeli ile işleyen,
                  kişiye özel eğitim önerileri sunan gelişmiş AI sistemi.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                5 adımda AI koçunuzun çalışma süreci
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-red-300 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="border-0 shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-orange-50 group-hover:to-amber-50 transition-all duration-300"></div>
                      <CardContent className="p-8 relative z-10">
                        <div className="relative mb-6">
                          <div className={`rounded-full p-6 w-20 h-20 mx-auto mb-4 ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="h-8 w-8" />
                          </div>
                          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg">
                            {step.step}
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow for mobile */}
                    {index < workflowSteps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-4 mb-4">
                        <ArrowRight className="h-6 w-6 text-orange-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI koçunuzun sunduğu gelişmiş yetenekler ve teknik özellikler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-4 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 shadow-md">
                        <feature.icon className="h-7 w-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-orange-600 font-medium text-sm group-hover:text-orange-700 transition-colors duration-300">
                        <Zap className="h-4 w-4" />
                        <span>Gelişmiş Teknoloji</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-200 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Tüm Özellikleri Keşfedin</h3>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  AI destekli satranç koçu ile kişiselleştirilmiş öğrenme deneyimini yaşayın
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  <Play className="mr-2 h-4 w-4" />
                  Demo İzle
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Scenarios */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Öğrenme Senaryoları</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningScenarios.map((scenario, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{scenario.title}</CardTitle>
                    <Badge variant="outline">{scenario.level}</Badge>
                  </div>
                  <CardDescription className="text-base mb-4">{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-orange-800 italic">💬 {scenario.example}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{scenario.duration}</span>
                    </div>
                    <Badge variant="secondary">{scenario.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Progress Example */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kişisel Gelişim Takibi</h2>
          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Örnek Öğrenci Profili</CardTitle>
              <CardDescription className="text-center">
                AI koçunuz sürekli olarak gelişiminizi takip eder ve size özel hedefler belirler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {studentProgress.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.skill}</span>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Mevcut: {skill.current}%</span>
                        <span>•</span>
                        <span>Hedef: {skill.target}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={skill.current} className="h-3" />
                      <div
                        className="absolute top-0 h-3 bg-orange-200 rounded-full"
                        style={{ width: `${skill.target}%`, zIndex: -1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                  AI Koçunuzun Önerisi
                </h3>
                <p className="text-gray-700">
                  "Taktik görme becerinizi geliştirmek için günde 15 dakika bulmaca çözmenizi öneriyorum. Özellikle
                  çatal ve şiş taktiklerine odaklanın. Pozisyonel anlayışınız için ise daha fazla açık oyun oynayın."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Teknik Özellikler</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Sistem Bileşenleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">LiveKit Entegrasyonu</h4>
                      <p className="text-sm text-gray-600">Gerçek zamanlı ses işleme ve optimize performans</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">RealTimeLLM</h4>
                      <p className="text-sm text-gray-600">Farklı API sağlayıcılarına hızlı entegrasyon</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">StudentProfile Modülü</h4>
                      <p className="text-sm text-gray-600">Öğrenci seviyesi ve zayıf yön analizi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">PromptShaper</h4>
                      <p className="text-sm text-gray-600">Dinamik soru ve öneri üretimi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Avantajlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Volume2 className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Doğal Konuşma</h4>
                      <p className="text-sm text-gray-600">Gerçek bir koçla konuşuyormuş gibi deneyim</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Kişiselleştirme</h4>
                      <p className="text-sm text-gray-600">Size özel eğitim programı ve öneriler</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Gerçek Zamanlı</h4>
                      <p className="text-sm text-gray-600">Anında geri bildirim ve analiz</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Sürekli Öğrenme</h4>
                      <p className="text-sm text-gray-600">Fine-tuning ile sürekli gelişen sistem</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integration Info */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fullstack Entegrasyonu</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Geliştirdiğimiz AI koçluk sistemi, fullstack satranç uygulamamızda satranç koçu kısmında kullanılacak.
            LiveKit teknolojisi ile optimize edilmiş, gerçek zamanlı etkileşim deneyimi sunar.
          </p>
          <Button size="lg" asChild>
            <Link href="/products/app">
              <Award className="mr-2 h-4 w-4" />
              Fullstack Uygulama
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
