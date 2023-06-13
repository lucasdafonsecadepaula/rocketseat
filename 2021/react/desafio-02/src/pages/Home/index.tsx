import { Body } from './Body'
import { HeroSection } from './HeroSection'

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center overflow-hidden">
        <HeroSection />
      </div>
      <Body />
    </>
  )
}
