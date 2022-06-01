import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { IngredientButton } from '../../../components/IngredientButton'
import { IngredientData, useIngredients } from '../../../hooks/Ingredients'
import { RequestLayout } from '../../../layout/RequestLayout'

const SizePage: NextPage = () => {
  const [selectedSize, setSelectedSize] = useState('')

  const { availableBases } = useIngredients()

  const handleSelectSize = useCallback((size: string) => () => {
    setSelectedSize(size)
  }, [])

  console.log({availableBases})

  const cheapestBasePrices = availableBases.reduce((prev, curr) => {
    const updated = {...prev}

    if (!updated.small || updated.small < curr.prices.small) {
      updated.small = curr.prices.small
    }

    if (!updated.medium || updated.medium < curr.prices.medium) {
      updated.medium = curr.prices.medium
    }

    if (!updated.large || updated.large < curr.prices.large) {
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
      <IngredientButton onClick={handleSelectSize('S')} isSelected={selectedSize === 'S'}>
        <span>Pequeno</span>
        <span>R$ {cheapestBasePrices.small}</span>
      </IngredientButton>

      <IngredientButton onClick={handleSelectSize('M')} isSelected={selectedSize === 'M'}>
        <span>Médio</span>
        <span>R$ {cheapestBasePrices.medium}</span>
      </IngredientButton>

      <IngredientButton onClick={handleSelectSize('L')} isSelected={selectedSize === 'L'}>
        <span>Grande</span>
        <span>R$ {cheapestBasePrices.large}</span>
      </IngredientButton>
    </RequestLayout>
  )
}

export default SizePage