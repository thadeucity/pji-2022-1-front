import React from 'react'
import { Button } from '../../../components/Button';
import { PriceBar } from '../../../components/PriceBar';
import { useOrder } from '../../../hooks/Order';
import { AppLayout } from '../../../layout/AppLayout';
import { CheckoutLayout } from '../../../layout/ChekoutLayout';
import { CheckoutPageComponent } from '../../../pageComponents/Checkout/CheckoutPage';
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../../services/fetchPageProps';
import { useEnsureValidPage } from '../../../utilityHooks/useEnsureValidPage';
import { useWhitelabel } from '../../../utilityHooks/useWhitelabel';

interface CheckoutPageProps{
  companyData: CompanyDataProps
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({companyData}) => {
  const { company } = useWhitelabel(companyData)
  useEnsureValidPage()



  return (
    <CheckoutLayout
      phone={company.phone}
      title='Checkout'
    >
      <CheckoutPageComponent />
    </CheckoutLayout>
  );
}


export default CheckoutPage


export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
