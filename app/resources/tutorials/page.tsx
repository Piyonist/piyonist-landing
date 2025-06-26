import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Play, Clock, Users, Star } from "lucide-react"

const tutorials = [
  {
    id: 1,
    title: "Satranç Temelleri",
    description: "Sıfırdan satranç öğrenmek isteyenler için kapsamlı başlangıç kursu",
    level: "Başlangıç",
    duration: "2 saat",
    lessons: 12,
    students: 1250,
    rating: 4.8,
    progress: 0,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Açılış Stratejileri",
    description: "Popüler açılışları öğrenin ve oyununuzu güçlendirin",
    level: "Orta",
    duration: "3 saat",
    lessons: 18,
    students: 890,
    rating: 4.9,
    progress: 45,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Taktik ve Kombinasyonlar",
    description: "Oyun içi taktikler ve kombinasyon teknikleri",
    level: "Orta",
    duration: "4 saat",
    lessons: 24,
    students: 670,
    rating: 4.7,
    progress: 0,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Final Oyunu Teknikleri",
    description: "Oyunun son aşamasında ustalaşmak için gerekli teknikler",
    level: "İleri",
    duration: "5 saat",
    lessons: 30,
    students: 450,
    rating: 4.9,
    progress: 0,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Pozisyonel Oyun",
    description: "Pozisyonel anlayışınızı geliştirin ve stratejik düşünmeyi öğrenin",
    level: "İleri",
    duration: "6 saat",
    lessons: 36,
    students: 320,
    rating: 4.8,
    progress: 0,
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Turnuva Hazırlığı",
    description: "Turnuvalara hazırlanmak için mental ve teknik stratejiler",
    level: "İleri",
    duration: "3 saat",
    lessons: 15,
    students: 280,
    rating: 4.6,
    progress: 0,
    thumbnail: "/placeholder.svg?height=200&width=300",
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

export default function TutorialsPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Eğitimler</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Adım adım satranç eğitimleri ile seviyenizi yükseltin. Başlangıçtan ileri seviyeye kadar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={tutorial.thumbnail || "/placeholder.svg"}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    <Play className="mr-2 h-5 w-5" />
                    İzlemeye Başla
                  </Button>
                </div>
                <Badge className={`absolute top-4 left-4 ${getLevelColor(tutorial.level)}`}>{tutorial.level}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                <CardDescription className="line-clamp-2">{tutorial.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{tutorial.students} öğrenci</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>{tutorial.lessons} ders</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>

                  {tutorial.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>İlerleme</span>
                        <span>{tutorial.progress}%</span>
                      </div>
                      <Progress value={tutorial.progress} className="h-2" />
                    </div>
                  )}

                  <Button asChild className="w-full">
                    <Link href={`/resources/tutorials/${tutorial.id}`}>
                      {tutorial.progress > 0 ? "Devam Et" : "Başla"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kişisel Öğrenme Planı Oluşturun</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            AI destekli sistemimiz, seviyenize ve hedeflerinize uygun kişisel bir öğrenme planı oluşturur.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Plan Oluştur</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
