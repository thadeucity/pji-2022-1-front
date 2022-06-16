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

interface FillingPageProps {
  companyData: CompanyDataProps
}

const FillingPage: NextPage<FillingPageProps> = ({companyData}) => {
  useWhitelabel(companyData)
  useEnsureValidPage()

  const { availableFillings } = useIngredients()
  const { order, setFilling } = useOrder()

  const fillingsToRender = useFilteredIngredients(availableFillings, 'filling')

  const handleSelectFillings = useCallback((filling: string) => () => {
    const hasFilling = order.filling === filling

    if (hasFilling) {
      setFilling('')
    } else {
      setFilling(filling)
    }
  }, [order.filling, setFilling])
  
  return (
    <RequestLayout 
      title="Escolha o Recheio"
      previous={{
        label: 'Voltar',
        href: '/steps/base'
      }}
      next={{
        label: 'Escolha a Cobertura',
        href: '/steps/frosting'
      }}
      showPriceBar
    >
      {fillingsToRender.map(filling => (
        <IngredientButton 
          onClick={handleSelectFillings(filling.id)} 
          isSelected={filling.isSelected} 
          key={filling.id}
        >
          <span>{filling.label}</span>
          <span>{formatPrice(filling.price)}</span>
        </IngredientButton>
      ))}
    </RequestLayout>
  )
}

export default FillingPage

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps