import type { NextPage } from 'next'
import { useCallback } from 'react'
import { IngredientButton } from '../../../components/IngredientButton'
import { PriceBar } from '../../../components/PriceBar'
import { useIngredients } from '../../../hooks/Ingredients'
import { useOrder } from '../../../hooks/Order'
import { RequestLayout } from '../../../layout/RequestLayout'
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../../services/fetchPageProps'
import { useEnsureValidPage } from '../../../utilityHooks/useEnsureValidPage'
import { useFilteredIngredients } from '../../../utilityHooks/useFilteredIngredients'
import { useWhitelabel } from '../../../utilityHooks/useWhitelabel'
import { formatPrice } from '../../../utils/formatPrice'

interface FrostingPageProps {
  companyData: CompanyDataProps
}

const FrostingPage: NextPage<FrostingPageProps> = ({companyData}) => {
  useWhitelabel(companyData)
  useEnsureValidPage()

  const { availableFrostings } = useIngredients()
  const { order, setFrosting } = useOrder()

  const frostingsToRender = useFilteredIngredients(availableFrostings, 'frosting')

  const handleSelectFrostings = useCallback((frosting: string) => () => {
    const hasFrosting = order.frosting === frosting

    if (hasFrosting) {
      setFrosting('')
    } else {
      setFrosting(frosting)
    }
  }, [order.frosting, setFrosting])

  return (
    <RequestLayout 
      title="Escolha a Cobertura"
      previous={{
        label: 'Voltar',
        href: '/steps/filling'
      }}
      next={{
        label: 'Escolha os Adicionais',
        href: '/steps/extras'
      }}
      showPriceBar
    >
      {frostingsToRender.map(frosting => (
        <IngredientButton 
          onClick={handleSelectFrostings(frosting.id)} 
          isSelected={frosting.isSelected} 
          key={frosting.id}
        >
          <span>{frosting.label}</span>
          <span>{formatPrice(frosting.price)}</span>
        </IngredientButton>
      ))}
    </RequestLayout>
  )
}

export default FrostingPage

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps