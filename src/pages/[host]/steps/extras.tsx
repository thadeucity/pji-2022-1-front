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

const ExtrasPage: NextPage<FrostingPageProps> = ({companyData}) => {
  useWhitelabel(companyData)
  useEnsureValidPage()

  const { availableExtras } = useIngredients()
  const { order, setExtras } = useOrder()

  const extrasToRender = useFilteredIngredients(availableExtras, 'extras')

  const handleSelectExtras = useCallback((extra: string) => () => {
    const hasExtra = order.extras.includes(extra)

    if (hasExtra) {
      setExtras(order.extras.filter(f => f !== extra))
    } else {
      setExtras([...order.extras, extra])
    }
  }, [order.extras, setExtras])

  return (
    <RequestLayout 
      title="Escolha os Adicionais"
      previous={{
        label: 'Voltar',
        href: '/steps/frosting'
      }}
      next={{
        label: 'Checkout',
        href: '/checkout'
      }}
      showPriceBar
    >
      {extrasToRender.map(extra => (
        <IngredientButton 
          onClick={handleSelectExtras(extra.id)} 
          isSelected={extra.isSelected} 
          key={extra.id}
        >
          <span>{extra.label}</span>
          <span>{formatPrice(extra.price)}</span>
        </IngredientButton>
      ))}
    </RequestLayout>
  )
}

export default ExtrasPage


export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps