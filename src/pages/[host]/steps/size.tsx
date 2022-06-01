import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { IngredientButton } from '../../../components/IngredientButton'
import { useIngredients } from '../../../hooks/Ingredients'
import { useOrder } from '../../../hooks/Order'
import { RequestLayout } from '../../../layout/RequestLayout'
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../../services/fetchPageProps'
import { useWhitelabel } from '../../../utilityHooks/useWhitelabel'
import { formatPrice } from '../../../utils/formatPrice'

interface SizePageProps {
  companyData: CompanyDataProps
}

const SizePage: NextPage<SizePageProps> = ({ companyData }) => {
  useWhitelabel(companyData)
  
  const { availableBases } = useIngredients()
  const { order, setSize } = useOrder()


  const handleSelectSize = useCallback((size: 'S' | 'M' | 'L') => () => {
    setSize(size)
  }, [setSize])

  const cheapestBasePrices = availableBases.reduce((prev, curr) => {
    const updated = {...prev}

    if (!updated.small || updated.small > curr.prices.small) {
      updated.small = curr.prices.small
    }

    if (!updated.medium || updated.medium > curr.prices.medium) {
      updated.medium = curr.prices.medium
    }

    if (!updated.large || updated.large > curr.prices.large) {
      updated.large = curr.prices.large
    }

    return updated
  }, {small: 0, medium: 0, large: 0})

  return (
    <RequestLayout 
      title="Escolha o Tamanho"
      previous={{
        label: 'Voltar',
        href: '/'
      }}
      next={{
        label: 'Escolha a massa',
        href: '/steps/base'
      }}
    >
      <IngredientButton onClick={handleSelectSize('S')} isSelected={order.size === 'S'}>
        <span>Pequeno</span>
        <span>{formatPrice(cheapestBasePrices.small)}</span>
      </IngredientButton>

      <IngredientButton onClick={handleSelectSize('M')} isSelected={order.size === 'M'}>
        <span>Médio</span>
        <span>{formatPrice(cheapestBasePrices.medium)}</span>
      </IngredientButton>

      <IngredientButton onClick={handleSelectSize('L')} isSelected={order.size === 'L'}>
        <span>Grande</span>
        <span>{formatPrice(cheapestBasePrices.large)}</span>
      </IngredientButton>
    </RequestLayout>
  )
}

export default SizePage

export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
