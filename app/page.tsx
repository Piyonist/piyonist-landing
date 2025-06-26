import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import Partners from "@/components/partners"

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <Features />
      <About />
      <Partners />
    </main>
  )
}
