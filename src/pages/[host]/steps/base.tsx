import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import { IngredientButton } from '../../../components/IngredientButton'
import { useIngredients } from '../../../hooks/Ingredients'
import { useOrder } from '../../../hooks/Order'
import { RequestLayout } from '../../../layout/RequestLayout'
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../../services/fetchPageProps'
import { useEnsureValidPage } from '../../../utilityHooks/useEnsureValidPage'
import { useFilteredIngredients } from '../../../utilityHooks/useFilteredIngredients'
import { useWhitelabel } from '../../../utilityHooks/useWhitelabel'
import { formatPrice } from '../../../utils/formatPrice'

interface BasePageProps {
  companyData: CompanyDataProps
}

const BasePage: NextPage<BasePageProps> = ({companyData}) => {
  useWhitelabel(companyData)
  useEnsureValidPage()

  const { availableBases } = useIngredients()
  const { setBase } = useOrder()

  const basesToRender = useFilteredIngredients(availableBases, 'base')

  const handleSelectBase = useCallback((base: string) => () => {
    setBase(base)
  }, [setBase])

  return (
    <RequestLayout 
      title="Escolha a Massa"
      previous={{
        label: 'Voltar',
        href: '/steps/size'
      }}
      next={{
        label: 'Escolha o Recheio',
        href: '/steps/filling'
      }}
    >
      {basesToRender.map(base => (
        <IngredientButton onClick={handleSelectBase(base.id)} isSelected={base.isSelected} key={base.id}>
          <span>{base.label}</span>
          <span>{formatPrice(base.price)}</span>
        </IngredientButton>
      ))}
    </RequestLayout>
  )
}

export default BasePage

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
