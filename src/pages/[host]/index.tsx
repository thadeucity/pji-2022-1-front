import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { Button } from '../../components/Button'
import { useCompany } from '../../hooks/Company'
import { getCompanyByUrl } from '../../io/getCompanyData'
import { AppLayout } from '../../layout/AppLayout'
import { HomeButtonsBar } from '../../pageStyles/home'

interface HomeProps {
  companyData: {
    id: string
    name: string
    email: string
    logo: string
    phone: string
    primaryColor: string
    secondaryColor: string
  }
}

const Home: NextPage<HomeProps> = ({ companyData }) => {
  const { data, setCompanyData } = useCompany()

  useEffect(() => {
    setCompanyData(companyData)
  }, [companyData, setCompanyData])

  if (!data.id) {
    return (
      <AppLayout>
        Carregando...
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div>
        <img 
          src={data.logo} 
          alt={`Logo ${data.name}`}
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const [companyData, hasError] = await getCompanyByUrl(ctx.params?.host as string)

  if (hasError) {
    return { notFound: true }
  }

  return {
    props: {
      companyData
    },
  }
}
