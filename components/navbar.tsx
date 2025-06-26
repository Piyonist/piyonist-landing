"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harezmi_satranc_logo-gKaFEkOBRKCDvHDg3r79pi9FHGyI51.jpeg"
              alt="Piyonist Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="hidden font-bold sm:inline-block text-xl">Piyonist</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Ürünler</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products/engine"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Satranç Motoru</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Güçlü Türk satranç motoru ile analiz yapın
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products/coaching"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">AI Koçluk</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Kişiye özel eğitim önerileri alın
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products/app"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Mobil Uygulama</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Her yerden erişim sağlayın
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kaynaklar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Satranç stratejileri ve güncellemeler
                        </p>
                      </Link>
                    </NavigationMenuLink>{/* 
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/tutorials"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Eğitimler</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Adım adım satranç dersleri
                        </p>
                      </Link>
                    </NavigationMenuLink> */}
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resources/careers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Ekibe Katıl</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Bizimle çalışmak ister misin?
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Fiyatlandırma
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    İletişim
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <Button asChild>
            <Link href="/contact">Başla</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harezmi_satranc_logo-gKaFEkOBRKCDvHDg3r79pi9FHGyI51.jpeg"
                alt="Piyonist Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold">Piyonist</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                    Ürünler
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <Link
                      href="/products/engine"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Satranç Motoru
                    </Link>
                    <Link
                      href="/products/coaching"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      AI Koçluk
                    </Link>
                    <Link
                      href="/products/app"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Mobil Uygulama
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                    Kaynaklar
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <Link
                      href="/resources/blog"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>{/* 
                    <Link
                      href="/resources/tutorials"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Eğitimler
                    </Link> */}
                    <Link
                      href="/resources/careers"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Ekibe Katıl
                    </Link>{/* 
                    <Link
                      href="/resources/social"
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Sosyal Medya
                    </Link> */}
                  </CollapsibleContent>
                </Collapsible>
                <Link href="/pricing" className="py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
                  Fiyatlandırma
                </Link>
                <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
                  İletişim
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harezmi_satranc_logo-gKaFEkOBRKCDvHDg3r79pi9FHGyI51.jpeg"
              alt="Piyonist Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold">Piyonist</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
