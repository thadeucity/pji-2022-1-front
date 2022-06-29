import React, { useState, createContext, useContext } from 'react'

interface CompanyData {
  id: string
  name: string
  email: string
  logo: string
  phone: string
  primaryColor: string
  secondaryColor: string
  profilePicture: string
  about: string
}

interface CompanyContextData {
  data: CompanyData
  setCompanyData: (data: CompanyData) => void 
}

const CompanyContext = createContext<CompanyContextData>({} as CompanyContextData)

const CompanyProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [company, setCompany] = useState({} as CompanyData)

  const setCompanyData = (data: CompanyData) => {
    setCompany(data)
  }

  return (
    <CompanyContext.Provider value={{data: company, setCompanyData}}>
      {children}
    </CompanyContext.Provider>
  )
}

const useCompany = (): CompanyContextData => {
  const context = useContext(CompanyContext)

  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider')
  }

  return context
}

export { CompanyProvider, useCompany }