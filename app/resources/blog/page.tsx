import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Yapay Zeka ile Satranç Öğrenmenin Avantajları",
    excerpt: "AI destekli satranç eğitiminin geleneksel yöntemlere göre üstünlüklerini keşfedin.",
    author: "Piyonist Ekibi",
    date: "15 Ağustos 2025",
    category: "AI & Teknoloji",
    readTime: "5 dk okuma",
  },
  {
    id: 2,
    title: "Açılış Stratejileri: Temel Prensipler",
    excerpt: "Satranç oyununun ilk aşamasında dikkat edilmesi gereken temel kurallar ve stratejiler.",
    author: "Ahmet Erdem Pamuk",
    date: "12 Ağustos 2025",
    category: "Strateji",
    readTime: "8 dk okuma",
  },
  {
    id: 3,
    title: "Türk Satranç Motoru Geliştirme Süreci",
    excerpt: "Yerli satranç motorumuzun geliştirilme sürecinde yaşadığımız deneyimler.",
    author: "Geliştirici Ekibi",
    date: "10 Temmuz 2025",
    category: "Geliştirme",
    readTime: "12 dk okuma",
  },
  {
    id: 4,
    title: "Orta Oyun Taktikleri ve Kombinasyonlar",
    excerpt: "Oyunun orta aşamasında avantaj elde etmek için kullanabileceğiniz taktikler.",
    author: " Arda Doruk Kaytancı",
    date: "8 Temmuz 2025",
    category: "Taktik",
    readTime: "10 dk okuma",
  },
  {
    id: 5,
    title: "Satranç Turnuvalarına Hazırlık Rehberi",
    excerpt: "Turnuva öncesi mental ve teknik hazırlık için kapsamlı rehber.",
    author: "Emirhan Etem Alkan",
    date: "5 Temmuz 2025",
    category: "Turnuva",
    readTime: "15 dk okuma",
  },
  {
    id: 6,
    title: "Final Oyunu: Temel Matlar",
    excerpt: "Oyunun son aşamasında bilmeniz gereken temel mat teknikleri.",
    author: " Mustafa Tarık Öncel",
    date: "3 Haziran 2025",
    category: "Final",
    readTime: "7 dk okuma",
  },
]

const categories = ["Tümü", "AI & Teknoloji", "Strateji", "Taktik", "Turnuva", "Final", "Geliştirme"]

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Satranç dünyasından en güncel haberler, stratejiler ve eğitim içerikleri.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Tümü" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-orange-100 hover:text-orange-800"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/resources/blog/${post.id}`}>
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Daha Fazla Makale Yükle
          </Button>
        </div>
      </div>
    </div>
  )
}
