import React, { useState, createContext, useContext, useCallback, useEffect } from 'react'
import { getCompanyIngredients } from '../io/getCompanyData'
import { useCompany } from './Company'

export interface IngradientPrices extends Record<string, number> {
  small: number
  medium: number
  large: number
}

export interface IngredientData {
  id: string
  name: string
  description: string
  category: string
  prices: IngradientPrices
}

interface IngredientsContextData {
  availableFillings: IngredientData[]
  availableFrostings: IngredientData[]
  availableExtras: IngredientData[]
  availableBases: IngredientData[]
  availableIngredients: IngredientData[]
  setIngredients: (data: IngredientData[]) => void
}

const IngredientsContext = createContext<IngredientsContextData>({} as IngredientsContextData)

const IngredientsProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { data: companyData } = useCompany()
  
  const [alreadyFetched, setAlreadyFetched] = useState(false)

  const [availableFillings, setAvailableFillings] = useState<IngredientData[]>([])
  const [availableFrostings, setAvailableFrostings] = useState<IngredientData[]>([])
  const [availableExtras, setAvailableExtras] = useState<IngredientData[]>([])
  const [availableBases, setAvailableBases] = useState<IngredientData[]>([])
  const [availableIngredients, setAvailableIngredients] = useState<IngredientData[]>([])

  const setIngredients = useCallback((data: IngredientData[]) => {
    setAvailableFillings(data.filter(item => item.category === 'filling'))
    setAvailableFrostings(data.filter(item => item.category === 'frosting'))
    setAvailableExtras(data.filter(item => item.category === 'extra'))
    setAvailableBases(data.filter(item => item.category === 'base'))
    setAvailableIngredients(data)
  }, [])

  useEffect(() => {
    if (companyData && companyData.id && !alreadyFetched) {
      getCompanyIngredients(companyData.id)
        .then(([res, hasError])=> {
          console.log({res})
          if (hasError) {
            console.error(res)
          } else {
            console.log({
              res: res.ingredients
            })
            setIngredients(res.ingredients)
          }
        })
        .finally(() => setAlreadyFetched(true))
    }
  }, [alreadyFetched, companyData, setIngredients])

  return (
    <IngredientsContext.Provider value={{
      availableFillings,
      availableFrostings,
      availableExtras,
      availableBases,
      availableIngredients,
      setIngredients
    }}>
      {children}
    </IngredientsContext.Provider>
  )
}

const useIngredients = (): IngredientsContextData => {
  const context = useContext(IngredientsContext)

  if (!context) {
    throw new Error('useIngredients must be used within a IngredientsProvider')
  }

  return context
}

export { IngredientsProvider, useIngredients }