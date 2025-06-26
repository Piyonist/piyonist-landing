import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Piyonistmeblogo from "@/public/piyonist-meblogo.svg"
import Tsflogo from "@/public/tsf-logo.png"

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Güçlü Sponsorlarımız</h2>
          <p className="mt-4 text-lg text-gray-600">
            Milli Eğitim Bakanlığı ve Türkiye Satranç Federasyonu gibi güçlü sponsorlarımızla işbirliği içinde bu süreci
            hızlandırıyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Image
                  src={Piyonistmeblogo}
                  alt="Milli Eğitim Bakanlığı"
                  width={96}
                  height={96}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Milli Eğitim Bakanlığı</h3>
              <p className="text-gray-600">Eğitim alanındaki yenilikçi projemizi destekleyen ana sponsorumuz</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Image
                  src={Tsflogo}
                  alt="Türkiye Satranç Federasyonu"
                  width={96}
                  height={96}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Türkiye Satranç Federasyonu</h3>
              <p className="text-gray-600">Satranç alanındaki uzmanlığımızı destekleyen federasyonumuz</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
