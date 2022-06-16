import React, { useState, createContext, useContext, useMemo, useCallback } from 'react'
import { useIngredients } from './Ingredients'

export interface OrderData { 
  size: 'S' | 'M' | 'L' | ''
  base: string
  filling: string
  frosting: string
  extras: string[]
}

interface OrderContextData {
  order: OrderData
  orderPrice: number
  setSize: (size: 'S' | 'M' | 'L') => void
  setBase: (base: string) => void
  setFilling: (filling: string) => void
  setFrosting: (frosting: string) => void
  setExtras: (extras: string[]) => void

  parsedOrder: {
    size: {
      label: string
      price: number
    }
    base: {
      label: string
      price: number
    }
    filling: {
      label: string
      price: number
    }
    frosting: {
      label: string
      price: number
    }
    extras: {
      label: string
      price: number
    }[]
  }
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData)

const OrderProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { availableIngredients } = useIngredients()

  const [order, setOrder] = useState<OrderData>({
    size: '',
    base: '',
    filling: '',
    frosting: '',
    extras: []
  })

  const setSize = (size: 'S' | 'M' | 'L') => {
    setOrder({...order, size})
  }

  const setBase = (base: string) => {
    setOrder({...order, base})
  }

  const setFilling = (filling: string) => {
    setOrder({...order, filling})
  }

  const setFrosting = (frosting: string) => {
    setOrder({...order, frosting})
  }

  const setExtras = (extras: string[]) => {
    setOrder({...order, extras})
  }

  const calculatePrice = useCallback((size: string, base: string, filling: string, frosting: string, extras: string[]): number => {
    const SAFE_SIZES = {
      S: 'small',
      M: 'medium',
      L: 'large'
    } as Record<string, string>

    const safeSize = SAFE_SIZES[size?.toUpperCase() || ''] || 'error'

    const basePrice = availableIngredients.find(item => item.id === base)?.prices[safeSize] || 0
    const fillingPrice = availableIngredients.find(item => item.id === filling)?.prices[safeSize] || 0
    const frostingPrice = availableIngredients.find(item => item.id === frosting)?.prices[safeSize] || 0
    const extrasPrice = extras.reduce((acc, item) => {
      const extra = availableIngredients.find(extra => extra.id === item)
      if (extra) {
        return acc + (extra.prices[safeSize] || 0)
      }
      return acc
    }, 0)

    return basePrice + fillingPrice + frostingPrice + extrasPrice
  }, [availableIngredients])

  const orderPrice = useMemo(() => {
    return calculatePrice(order.size, order.base, order.filling, order.frosting, order.extras)
  }, [calculatePrice, order.base, order.extras, order.filling, order.frosting, order.size])

  const parsedSize = useMemo(() => {
    const PARSED_SIZES = {
      S: 'Pequeno',
      M: 'Médio',
      L: 'Grande'
    } as Record<string, string>

    return  {
      label: PARSED_SIZES[order.size?.toUpperCase() || ''] || 'error',
      price: 0
    }
  },[order.size])

  const priceKey = useMemo(() => {
    const PARSED_SIZES = {
      S: 'small',
      M: 'medium',
      L: 'large'
    } as Record<string, string>

    return PARSED_SIZES[order.size?.toUpperCase() || ''] || 'error'
  }, [order.size])

  const parsedBase = useMemo(() => {
    if (!order.base) return {label: 'Nenhum', price: 0}

    const item = availableIngredients.find(item => item.id === order.base)

    return {
      label: item?.name || 'error',
      price: item?.prices[priceKey] || 0
    }
  }, [availableIngredients, order.base, priceKey])

  const parsedFilling = useMemo(() => {
    if (!order.filling) return {label: 'Nenhum', price: 0}
    return {
      label: availableIngredients.find(item => item.id === order.filling)?.name || 'error',
      price: availableIngredients.find(item => item.id === order.filling)?.prices[priceKey] || 0
    }
  }, [availableIngredients, order.filling, priceKey])

  const parsedFrosting = useMemo(() => {
    if (!order.frosting) return {label: 'Nenhum', price: 0}
    return {
      label: availableIngredients.find(item => item.id === order.frosting)?.name || 'error',
      price: availableIngredients.find(item => item.id === order.frosting)?.prices[priceKey] || 0
    }
  }, [availableIngredients, order.frosting, priceKey])

  const parsedExtras = useMemo(() => {
    if (!order.extras) return [{label: 'Nenhum', price: 0}]

    return availableIngredients
      .filter(item => order.extras.includes(item.id))
      .map(item => ({
        label: item.name,
        price: item.prices[priceKey] || 0
      }))
  }, [availableIngredients, order.extras, priceKey])

  return (
    <OrderContext.Provider value={{
      order,
      setSize,
      setBase, 
      setFilling, 
      setFrosting, 
      setExtras,
      orderPrice,
      parsedOrder: {
        size: parsedSize,
        base: parsedBase,
        filling: parsedFilling,
        frosting: parsedFrosting,
        extras: parsedExtras
      }
    }}
    >
      {children}
    </OrderContext.Provider>
  )
}

const useOrder = (): OrderContextData => {
  const context = useContext(OrderContext)

  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider')
  }

  return context
}

export { OrderProvider, useOrder }