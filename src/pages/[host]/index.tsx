import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '../../components/Button'
import { AppLayout } from '../../layout/AppLayout'
import { HomeButtonsBar } from '../../pageStyles/home'
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../services/fetchPageProps'
import { useWhitelabel } from '../../utilityHooks/useWhitelabel'

interface HomeProps {
  companyData: CompanyDataProps
}

const Home: NextPage<HomeProps> = ({ companyData }) => {
  const { company } = useWhitelabel(companyData)

  return (
    <AppLayout>
      <div>
        <img 
          src={company.logo} 
          alt={`Logo ${company.name}`}
        />
      </div>

      <HomeButtonsBar>
        <Link href="/steps/size">
          <a>
            <Button>
              Pedir Bolo
            </Button>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <Button>
              Sobre
            </Button>
          </a>
        </Link>
      </HomeButtonsBar>

    </AppLayout>
  )
}

export default Home

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
