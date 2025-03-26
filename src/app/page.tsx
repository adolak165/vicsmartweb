import Hero from '@/components/Hero'
import TopYoutubers from '@/components/TopYoutubers'
import YoutubeAwards from '@/components/YoutubeAwards'
import HowYoutubePays from '@/components/HowYoutubePays'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopYoutubers />
      <YoutubeAwards />
      <HowYoutubePays />
    </main>
  )
}
