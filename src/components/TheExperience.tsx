import ASection from './ASection'
import TheExperienceElement, {
  TheExperienceElementProps,
} from './TheExperienceElement'
import deloitteLogo from './logos/deloitte.png'
import fintonicLogo from './logos/fintonic.png'
import glovoLogo from './logos/glovo.png'
import ingLogo from './logos/ing.png'
import ninetynineLogo from './logos/ninetynine.png'
import orangeBankLogo from './logos/orangebank.png'
import zedLogo from './logos/zed.png'

const experiences: TheExperienceElementProps[] = [
  {
    title: 'Engineering Manager',
    company: {
      name: 'Glovo',
      link: 'http://glovoapp.com',
      logo: glovoLogo,
    },
    startDate: '2021-10-01',
    endDate: 'Present',
    description: [
      'Spearheaded the Invoicing and Digital Ledger division, leading a dynamic team of 15 engineers',
      'Oversaw end-to-end hiring processes for L1-L4 software engineering roles, enhancing team capacity by 20%',
      'Championed career progression strategies and annual performance evaluations for direct reports',
      'Steered agile Scrum ceremonies and championed the adoption of extreme programming (XP) methodologies, boosting delivery speed by 15%',
      'Collaborated with cross-functional teams to drive product innovation and streamline workflows',
    ],
  },
  {
    title: 'Head of Engineering',
    company: {
      name: 'Ninety Nine',
      link: 'https://ninetynine.com/',
      logo: ninetynineLogo,
    },
    startDate: '2020-04-01',
    endDate: '2021-09-01',
    description: [
      'Architected an event-driven distributed system, enhancing system resilience and scalability',
      'Crafted a strategic IT roadmap, shaping the technological vision, and fostering a culture of best practices',
      'Mentored and nurtured a team of 15 engineers, emphasizing continuous learning and personal growth',
      'Revolutionized customer onboarding process, cutting down registration time to under 5 minutes, increasing user acquisition by 30%',
      'Initiated and facilitated regular knowledge-sharing sessions, bolstering team cohesion and expertise',
    ],
  },
  {
    title: 'Lead CI/CD Architect',
    company: {
      name: 'Orange Bank',
      link: 'https://orangebank.es/',
      logo: orangeBankLogo,
    },
    startDate: '2018-07-01',
    endDate: '2020-04-01',
    description: [
      'Helmed a team of engineers, championing the Kanban framework for optimal throughput',
      'Pioneered a software development platform serving multiple squads, integrating Jenkins and Helm for seamless CI/CD pipelines',
      'Orchestrated and sustained Kubernetes clusters via EKS and Terraform, reducing deployment time by 25%',
      'Paved the way for the GitOps operational model, promoting infrastructure as code principles',
      'Organized bi-weekly workshops on CI/CD best practices, elevating team expertise',
    ],
  },
  {
    title: 'DevOps Chapter Lead',
    company: {
      name: 'ING España & Portugal',
      link: 'https://www.ing.es/',
      logo: ingLogo,
    },
    startDate: '2017-02-01',
    endDate: '2018-07-01',
    description: [
      'Directed a team of engineers, employing the SCRUM framework to enhance delivery and agility',
      'Integrated multiple squads into the ING development platform, leveraging tools such as Artifactory, Jenkins, Nolio, and Ansible',
      'Conceptualized and executed a flexible dev and testing environment, driving efficient workflows',
      'Collaborated with diverse departments to refine the software development lifecycle, reducing bottlenecks',
      'Oversaw release coordination across multiple teams, ensuring timely and efficient product launches',
    ],
  },
  {
    title: 'Senior DevOps Engineer',
    company: {
      name: 'Fintonic',
      link: 'https://www.fintonic.com/',
      logo: fintonicLogo,
    },
    startDate: '2015-03-01',
    endDate: '2017-02-01',
    description: [
      'Pioneered the company’s first automated CI/CD pipeline, leveraging Jenkins, Groovy, Python, and Artifactory',
      'Managed and scaled Kubernetes clusters in AWS, harnessing the power of Chef and Ansible',
      'Played a pivotal role in containerizing the platform for Kubernetes deployment, achieving 99.9% uptime',
      "Guided the team's migration to a microservices architecture, ensuring scalability and maintainability",
      'Organized monthly tech talks, promoting continuous learning and team bonding',
    ],
  },
  {
    title: 'Software Engineer',
    company: {
      name: 'Zed',
      link: 'https://www.zed.com/',
      logo: zedLogo,
    },
    startDate: '2012-09-01',
    endDate: '2014-11-01',
    description: [
      'Engineered robust REST APIs for mobile applications leveraging Spring and AWS technologies',
      'Championed agile and XP methodologies, promoting a culture of feedback and iterative improvement',
      'Designed and implemented third-party integrations, enhancing platform versatility and reach',
      'Participated in bi-weekly hackathons, fostering innovation and team collaboration',
    ],
  },
  {
    title: 'IT Consultant',
    company: {
      name: 'Deloitte',
      link: 'https://www2.deloitte.com/',
      logo: deloitteLogo,
    },
    startDate: '2011-06-01',
    endDate: '2012-09-01',
    description: [
      'Optimized and maintained diverse web applications using Apache Axis 2.0, jQuery, ExtJS, Spring MVC, and Hibernate',
      'Collaborated closely with clients to capture requirements and ensure product alignment',
      'Delivered training sessions on best coding practices to junior engineers',
    ],
  },
]
const quotes = [
  {
    author: 'Albert Einstein',
    quote: 'The only source of knowledge is experience.',
  },
  {
    author: 'Julius Caesar',
    quote: 'Experience is the teacher of all things.',
  },
]

export default function TheExperience() {
  return (
    <ASection
      title="Where did I worked?"
      subtitle="EXPERIENCE"
      quotes={quotes}
      id="experience"
    >
      <ol className="space-y-12">
        {experiences.map((experience) => (
          <TheExperienceElement
            key={experience.title}
            {...experience}
          ></TheExperienceElement>
        ))}
      </ol>
    </ASection>
  )
}
