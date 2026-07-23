import { EarlyAccess } from './components/EarlyAccess'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { GenreCarousel } from './components/GenreCarousel'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LearningLoop } from './components/LearningLoop'
import { Safety } from './components/Safety'
import { Story } from './components/Story'
import { StudyAnywhere } from './components/StudyAnywhere'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Story />
        <GenreCarousel />
        <StudyAnywhere />
        <LearningLoop />
        <Features />
        <Safety />
        <EarlyAccess />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
