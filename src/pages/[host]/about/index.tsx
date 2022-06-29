import type { NextPage } from 'next'
import { AboutPageComponent } from '../../../pageComponents/About/AboutPage'
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../../services/fetchPageProps'
import { useWhitelabel } from '../../../utilityHooks/useWhitelabel'

interface AboutProps {
  companyData: CompanyDataProps
}

const About: NextPage<AboutProps> = ({ companyData }) => {
  const { company } = useWhitelabel(companyData)

  return (
    <AboutPageComponent company={company} />
  )
}

export default About

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
