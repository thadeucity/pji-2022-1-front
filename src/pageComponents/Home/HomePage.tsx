import Link from "next/link"
import { Button } from "../../components/Button"
import { AppLayout } from "../../layout/AppLayout"
import { HomeButtonsBar } from "../../pageStyles/home"
import { CompanyDataProps } from "../../services/fetchPageProps"
import { HomePageContainer as Container } from "./HomePage.styles"

interface HomePageProps {
  company: CompanyDataProps
}

export const HomePageComponent = ({ company }: HomePageProps) => {
  return (
    <AppLayout>
      <Container>
        <div className="logo__container">
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
      </Container>
    </AppLayout>
  )
}