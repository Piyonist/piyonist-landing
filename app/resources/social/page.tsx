import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import {
  X,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Users,
  Heart,
  Share2,
  TrendingUp,
  Calendar,
  ExternalLink,
  Star,
  Trophy,
} from "lucide-react"

const socialPlatforms = [
  {
    name: "X (Twitter)",
    handle: "@PiyonistSatranc",
    url: "https://x.com/PiyonistSatranc",
    icon: X,
    followers: "2.5K",
    description: "Güncel haberler, duyurular ve satranç ipuçları",
    color: "bg-black text-white",
    posts: [
      {
        content: "🚀 Türk satranç motorumuzun ilk beta testleri başladı! Stockfish'e rakip olacak performans...",
        likes: 156,
        retweets: 43,
        time: "2 saat önce",
      },
      {
        content: "🧠 AI koçluk sistemimiz ile öğrencilerimiz %40 daha hızlı gelişiyor! #SatrançEğitimi",
        likes: 89,
        retweets: 27,
        time: "1 gün önce",
      },
    ],
  },
  {
    name: "Instagram",
    handle: "@piyonist.satranc",
    url: "https://www.instagram.com/piyonist.satranc/",
    icon: Instagram,
    followers: "4.1K",
    description: "Görsel içerikler, ekip hikayeleri ve günlük paylaşımlar",
    color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    posts: [
      {
        content: "Ekibimizin haftalık toplantısından kareler 📸 #TeamWork #PiyonistEkibi",
        likes: 234,
        comments: 18,
        time: "3 saat önce",
      },
      {
        content: "Yeni UI tasarımımızı beğendiniz mi? 🎨 #UIDesign #SatrançUygulaması",
        likes: 187,
        comments: 31,
        time: "2 gün önce",
      },
    ],
  },
  {
    name: "LinkedIn",
    handle: "Piyonist Satranç",
    url: "https://www.linkedin.com/company/piyonist-satranc",
    icon: Linkedin,
    followers: "1.8K",
    description: "Profesyonel güncellemeler, kariyer fırsatları ve teknik yazılar",
    color: "bg-blue-600 text-white",
    posts: [
      {
        content: "Lise öğrencilerinden oluşan ekibimiz nasıl bir satranç motoru geliştiriyor? 🤔",
        likes: 67,
        comments: 12,
        time: "1 gün önce",
      },
    ],
  },
  {
    name: "YouTube",
    handle: "Piyonist Satranç",
    url: "#",
    icon: Youtube,
    followers: "892",
    description: "Eğitim videoları, geliştirme süreçleri ve canlı yayınlar",
    color: "bg-red-600 text-white",
    posts: [
      {
        content: "🎥 'AI ile Satranç Öğrenmek' video serimizin ilk bölümü yayında!",
        views: "1.2K görüntüleme",
        time: "3 gün önce",
      },
    ],
  },
]

const communityStats = [
  { label: "Toplam Takipçi", value: "9.3K+", icon: Users },
  { label: "Aylık Etkileşim", value: "45K+", icon: Heart },
  { label: "Paylaşım Sayısı", value: "280+", icon: Share2 },
  { label: "Büyüme Oranı", value: "%156", icon: TrendingUp },
]

const upcomingEvents = [
  {
    title: "Canlı Kodlama Yayını",
    date: "28 Aralık 2024",
    time: "20:00",
    platform: "YouTube",
    description: "Satranç motoru geliştirme sürecini canlı yayında izleyin",
    type: "Teknik",
  },
  {
    title: "AI Koçluk Demo",
    date: "30 Aralık 2024",
    time: "19:00",
    platform: "Instagram Live",
    description: "Yapay zeka koçluk sistemimizin canlı demosunu izleyin",
    type: "Demo",
  },
  {
    title: "Ekip Tanıtımı",
    date: "2 Ocak 2025",
    time: "18:30",
    platform: "LinkedIn Live",
    description: "Piyonist ekibinin hikayesini dinleyin",
    type: "Tanıtım",
  },
]

const userStories = [
  {
    name: "Ahmet K.",
    role: "Lise Öğrencisi",
    story: "Piyonist sayesinde satranç seviyem 1200'den 1600'e çıktı! AI koçluk sistemi gerçekten işe yarıyor.",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Zeynep M.",
    role: "Satranç Antrenörü",
    story: "Öğrencilerime Piyonist'i öneriyorum. Türk motoru olması ve AI desteği çok değerli.",
    rating: 5,
    avatar: "ZM",
  },
  {
    name: "Mehmet Y.",
    role: "Yazılım Geliştirici",
    story: "Açık kaynak projelere katkıda bulunmak isteyenler için harika bir fırsat!",
    rating: 5,
    avatar: "MY",
  },
]

const hashtags = [
  "#PiyonistSatranç",
  "#TürkSatrançMotoru",
  "#AIKoçluk",
  "#SatrançEğitimi",
  "#YapayZeka",
  "#LiseÖğrencileri",
  "#AçıkKaynak",
  "#TeknolojiTürkiye",
]

export default function SocialPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">Sosyal Medya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Piyonist topluluğuna katılın! Güncel gelişmeleri takip edin, sorularınızı sorun ve satranç tutkunlarıyla
            bağlantı kurun.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {hashtags.map((hashtag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {hashtag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="rounded-full bg-orange-100 p-3 w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Platforms */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Bizi Takip Edin</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`rounded-lg p-3 ${platform.color}`}>
                        <platform.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{platform.name}</CardTitle>
                        <CardDescription className="text-gray-600">{platform.handle}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{platform.followers}</div>
                      <div className="text-sm text-gray-600">takipçi</div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {platform.posts.map((post, postIndex) => (
                      <div key={postIndex} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-800 mb-3">{post.content}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-4">
                            {post.likes && (
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{post.likes}</span>
                              </div>
                            )}
                            {post.retweets && (
                              <div className="flex items-center space-x-1">
                                <Share2 className="h-3 w-3" />
                                <span>{post.retweets}</span>
                              </div>
                            )}
                            {post.comments && (
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{post.comments}</span>
                              </div>
                            )}
                            {post.views && <span>{post.views}</span>}
                          </div>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                      Takip Et
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Yaklaşan Etkinlikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge variant="outline">{event.platform}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>{event.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{event.description}</CardDescription>
                  <Button asChild className="w-full" size="sm">
                    <Link href="/contact">Hatırlat</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kullanıcı Hikayeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>{story.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community CTA */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Topluluğumuza Katılın!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Piyonist topluluğunun bir parçası olun. Sorularınızı sorun, deneyimlerinizi paylaşın ve satranç
            yolculuğunuzda yalnız olmadığınızı hissedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="https://discord.gg/piyonist" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Discord'a Katıl
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Trophy className="mr-2 h-4 w-4" />
                Turnuvaya Katıl
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
