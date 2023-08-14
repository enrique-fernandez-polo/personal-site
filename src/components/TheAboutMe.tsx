import ASection from './ASection'

const quotes = [
  {
    author: 'Paolo Coelho',
    quote: 'Never apologize for being yourself.',
  },
  {
    author: 'Steve Jobs',
    quote: 'Our time is limited, so don’t waste it living someone else’s life.',
  },
]

export default function TheAboutMe() {
  return (
    <ASection
      title="Who am I?"
      subtitle="ABOUT ME"
      quotes={quotes}
      id="about-me"
    >
      <p>
        Hello there! I&apos;m a digital innovator with a proven legacy in
        architecting cutting-edge solutions. From orchestrating rapid customer
        onboarding at Ninety Nine to steering agile tech squads at Glovo,
        I&apos;ve mastered the art of turning challenges into opportunities.
      </p>
      <p>
        My forte? Crafting scalable technologies and cultivating teams that
        amplify business growth. If you seek a catalyst for transformative tech
        endeavors, let&apos;s harness our combined potential and shape the
        future.
      </p>
    </ASection>
  )
}
