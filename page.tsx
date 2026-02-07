import HeroSection from '@/components/HeroSection'
import WaitlistForm from '@/components/waitlistform'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection 
        backgroundImageLight="/worldmap2.jpg"

      />
      <WaitlistForm />
           <Footer />  
    </main>
  )
}
