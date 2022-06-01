import { Global, css } from "@emotion/react";
import { useCompany } from "../hooks/Company";



export const CompanyStyles = () => {
  const { data } = useCompany()

  return (<Global styles={css`
    :root {
      --color-primary: ${data.primaryColor || '#ff9000'};
      --color-secondary: ${data.secondaryColor || '#3010CC'};
    }
  `} />)
  
}