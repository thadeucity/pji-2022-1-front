import { useEffect } from "react";
import { useCompany } from "../hooks/Company";
import { CompanyDataProps } from "../services/fetchPageProps";

export const useWhitelabel = (companyData: CompanyDataProps) => {
  const { data, setCompanyData } = useCompany()
  
  useEffect(() => {
    setCompanyData(companyData)
  }, [companyData, setCompanyData])

  return { company: data }
}