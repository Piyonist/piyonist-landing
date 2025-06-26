import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Users, MapPin, Clock, GraduationCap, Code, Heart, Zap, Target, Coffee, Laptop, Globe } from "lucide-react"

const openPositions = [
  {
    title: "Frontend Developer",
    department: "Web Geliştirme",
    type: "Part-time",
    location: "Remote",
    description: "React/Next.js ile modern web arayüzleri geliştirme",
    requirements: ["React/Next.js", "TypeScript", "Tailwind CSS", "Git"],
    level: "Orta",
  },
  {
    title: "Backend Developer",
    department: "Web Geliştirme",
    type: "Part-time",
    location: "Remote",
    description: "Node.js ve Python ile API geliştirme",
    requirements: ["Node.js", "Python", "PostgreSQL", "REST API"],
    level: "Orta",
  },
  {
    title: "AI/ML Engineer",
    department: "Yapay Zeka",
    type: "Part-time",
    location: "Remote",
    description: "Satranç motoru ve AI koçluk sistemi geliştirme",
    requirements: ["Python", "TensorFlow/PyTorch", "Machine Learning", "Chess Knowledge"],
    level: "İleri",
  },
  {
    title: "UI/UX Designer",
    department: "Tasarım",
    type: "Part-time",
    location: "Remote",
    description: "Kullanıcı deneyimi ve arayüz tasarımı",
    requirements: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    level: "Başlangıç",
  },
  {
    title: "Mobile Developer",
    department: "Mobil Geliştirme",
    type: "Part-time",
    location: "Remote",
    description: "React Native ile mobil uygulama geliştirme",
    requirements: ["React Native", "JavaScript", "iOS/Android", "App Store"],
    level: "Orta",
  },
  {
    title: "DevOps Engineer",
    department: "Altyapı",
    type: "Part-time",
    location: "Remote",
    description: "CI/CD ve bulut altyapısı yönetimi",
    requirements: ["Docker", "AWS/Azure", "CI/CD", "Kubernetes"],
    level: "İleri",
  },
]

const teamValues = [
  {
    icon: GraduationCap,
    title: "Öğrenme Odaklı",
    description: "Sürekli öğrenmeyi ve gelişimi destekliyoruz",
  },
  {
    icon: Users,
    title: "Takım Ruhu",
    description: "Birlikte başarıya ulaşmaya inanıyoruz",
  },
  {
    icon: Zap,
    title: "Yenilikçilik",
    description: "Teknolojinin sınırlarını zorluyoruz",
  },
  {
    icon: Heart,
    title: "Tutku",
    description: "Yaptığımız işe olan tutkumuz bizi motive ediyor",
  },
]

const benefits = [
  {
    icon: Laptop,
    title: "Remote Çalışma",
    description: "Türkiye'nin her yerinden esnek çalışma imkanı",
  },
  {
    icon: Clock,
    title: "Esnek Saatler",
    description: "Okul programınıza uygun çalışma saatleri",
  },
  {
    icon: Code,
    title: "Teknoloji Eğitimi",
    description: "En güncel teknolojileri öğrenme fırsatı",
  },
  {
    icon: Target,
    title: "Proje Deneyimi",
    description: "Gerçek projelerde çalışma deneyimi",
  },
  {
    icon: Globe,
    title: "Açık Kaynak",
    description: "Açık kaynak projelere katkıda bulunma",
  },

]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Başlangıç":
      return "bg-green-100 text-green-800"
    case "Orta":
      return "bg-yellow-100 text-yellow-800"
    case "İleri":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function CareersPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">Ekibe Katıl</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Türkiye'nin dört bir yanından gelen lise öğrencilerinden oluşan güçlü ekibimize katıl. Yapay zeka ve satranç
            alanında yenilikçi projeler geliştir, deneyim kazan ve geleceğini şekillendir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#positions">Açık Pozisyonlar</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#team">Ekibimizi Tanı</Link>
            </Button>
          </div>
        </div>

        {/* Team Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="rounded-full bg-orange-100 p-4 w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Neler Sunuyoruz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="positions" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Açık Pozisyonlar</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Badge variant="outline">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge className={getLevelColor(position.level)}>{position.level}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mb-4">{position.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Aranan Özellikler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="secondary">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Başvur</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Başvuru Süreci</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-orange-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Başvuru</h3>
              <p className="text-sm text-gray-600">İletişim formunu doldur ve CV'ni gönder</p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-orange-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">İnceleme</h3>
              <p className="text-sm text-gray-600">Başvurun ekibimiz tarafından değerlendirilir</p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-orange-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Görüşme</h3>
              <p className="text-sm text-gray-600">Online teknik görüşme ve tanışma</p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-orange-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Katılım</h3>
              <p className="text-sm text-gray-600">Ekibe katıl ve projelerde çalışmaya başla</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Hemen Başvur</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
