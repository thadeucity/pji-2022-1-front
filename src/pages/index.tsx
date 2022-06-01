import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '../components/Button'
import { AppLayout } from '../layout/AppLayout'
import { HomeButtonsBar } from '../pageStyles/home'

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div>
        <img 
          src="https://bonitour.com.br/images/svgs/logo.svg" 
          alt="company__logo"
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
