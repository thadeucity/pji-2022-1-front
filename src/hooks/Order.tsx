import React, { useState, createContext, useContext } from 'react'

export interface OrderData { 
  size: 'S' | 'M' | 'L'
  base: string
  fillings: string[]
  frosting: string[]
  extras: string[]
}

interface OrderContextData {
  order: OrderData
  setSize: (size: 'S' | 'M' | 'L') => void
  setBase: (base: string) => void
  setFillings: (fillings: string[]) => void
  setFrosting: (frosting: string[]) => void
  setExtras: (extras: string[]) => void
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData)

const OrderProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [order, setOrder] = useState({} as OrderData)

  const setSize = (size: 'S' | 'M' | 'L') => {
    setOrder({...order, size})
  }

  const setBase = (base: string) => {
    setOrder({...order, base})
  }

  const setFillings = (fillings: string[]) => {
    setOrder({...order, fillings})
  }

  const setFrosting = (frosting: string[]) => {
    setOrder({...order, frosting})
  }

  const setExtras = (extras: string[]) => {
    setOrder({...order, extras})
  }

  return (
    <OrderContext.Provider value={{order, setSize, setBase, setFillings, setFrosting, setExtras}}>
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