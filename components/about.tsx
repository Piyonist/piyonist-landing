import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Lightbulb, Globe } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-gray-50 w-full flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Hakkımızda
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Gençlerin Gücüyle Geleceği Şekillendiriyoruz
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Türkiye'nin dört bir yanından gelen lise öğrencilerinden oluşan güçlü ekibimizle, bir Türk satranç motoru
              ve satranç koçu geliştiriyoruz. Yapay zeka teknolojilerini satranç eğitimi ve bireysel gelişim süreçlerine
              entegre ederek, alanda yenilikçi bir çözüm sunmayı hedefliyoruz.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <GraduationCap className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Lise Öğrencileri</p>
                  <p className="text-sm text-gray-600">Genç yetenekler</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Güçlü Ekip</p>
                  <p className="text-sm text-gray-600">Türkiye geneli</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Lightbulb className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Yenilikçi Çözüm</p>
                  <p className="text-sm text-gray-600">AI teknolojisi</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Türk Motoru</p>
                  <p className="text-sm text-gray-600">Yerli ve milli</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                  <p className="text-gray-600 mb-6">
                    Türkiye'nin satranç alanındaki ilerlemesine katkıda bulunmak ve yapay zeka destekli eğitim
                    sistemleri ile satranç öğrenimini demokratikleştirmek.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-orange-800 font-medium">
                      "Satranç sadece bir oyun değil, düşünme sanatıdır. Biz de bu sanatı teknoloji ile buluşturuyoruz."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
