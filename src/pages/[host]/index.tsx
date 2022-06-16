import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '../../components/Button'
import { AppLayout } from '../../layout/AppLayout'
import { HomePageComponent } from '../../pageComponents/Home/HomePage'
import { HomeButtonsBar } from '../../pageStyles/home'
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../services/fetchPageProps'
import { useWhitelabel } from '../../utilityHooks/useWhitelabel'

interface HomeProps {
  companyData: CompanyDataProps
}

const Home: NextPage<HomeProps> = ({ companyData }) => {
  const { company } = useWhitelabel(companyData)

  return (
    <HomePageComponent company={company} />
  )
}

export default Home

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
