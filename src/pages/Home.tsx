/**
 * @file Home.tsx
 * @description Main landing page composing all sections for the academic portfolio site.
 */

import { PageShell } from '../components/layout/PageShell'
import { HeroSection } from '../components/home/HeroSection'
import { AboutSection } from '../components/home/AboutSection'
import { ResearchSection } from '../components/home/ResearchSection'
import { PublicationsSection } from '../components/home/PublicationsSection'
import { TeachingSection } from '../components/home/TeachingSection'
import { ContactSection } from '../components/home/ContactSection'

/**
 * HomePage component
 * @description Root page that stitches together hero, about, research, publications,
 * teaching, and contact sections in a single-scrolling layout.
 */
export default function HomePage() {
  return (
    <PageShell title="Your Name">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <TeachingSection />
      <ContactSection />
    </PageShell>
  )
}
