import Link from "next/link"
import { useMemo } from "react"
import { Button } from "../../components/Button"
import { AppLayout } from "../../layout/AppLayout"
import { CompanyDataProps } from "../../services/fetchPageProps"
import { AboutPageContainer as Container} from "../About/styles"

interface AboutPageProps {
  company: CompanyDataProps
}

export const AboutPageComponent = ({ company }: AboutPageProps) => {
  const parsedText = useMemo(() => {
    return company?.about?.split("\n").map((item, index) => {
      if (index === 0) return <b key={index}>{item.replace(/\*/g, '')}</b>
      return <p key={index}>{item}</p>
    }) || []
  }, [company?.about])

  return (
    <AppLayout>
      <Container>
        <div className="about__head">
          <h1>{company.name}</h1>

          <div className="pic__container">
            <img 
              src={company?.profilePicture} 
              alt={`Profile ${company?.name}`}
              />
          </div>
        </div>

        <div className="about__text">
          {parsedText}
        </div>

        <Link href="/steps/size">
            <a className="place_order__btn">
              <Button>
                Fazer um pedido
              </Button>
            </a>
        </Link>
      </Container>
    </AppLayout>
  )
}