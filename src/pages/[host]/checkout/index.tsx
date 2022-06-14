import React from 'react'
import { Button } from '../../../components/Button';
import { PriceBar } from '../../../components/PriceBar';
import { useOrder } from '../../../hooks/Order';
import { AppLayout } from '../../../layout/AppLayout';
import { buildStaticPaths, buildStaticProps, CompanyDataProps } from '../../../services/fetchPageProps';
import { useEnsureValidPage } from '../../../utilityHooks/useEnsureValidPage';
import { useWhitelabel } from '../../../utilityHooks/useWhitelabel';

interface CheckoutPageProps{
  companyData: CompanyDataProps
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({companyData}) => {
  const { company } = useWhitelabel(companyData)
  useEnsureValidPage()

  const { parsedOrder } = useOrder()

  return (
    <AppLayout>
      <div>
        <h1>Checkout</h1>
      </div>

      <div>
        <h2>Pedido</h2>
        <div>
          <ul>
            <li>
              <strong>Tamanho:</strong>
              <span>{parsedOrder.size}</span>
            </li>
            <li>
              <strong>Base:</strong>
              <span>{parsedOrder.base}</span>
            </li>
            <li>
              <strong>Recheio:</strong>
              <span>{parsedOrder.filling}</span>
            </li>
            <li>
              <strong>Cobertura:</strong>
              <span>{parsedOrder.frosting}</span>
            </li>
            <li>
              <strong>Extras:</strong>
              <span>{parsedOrder.extras.join(', ')}</span>
            </li>
          </ul>
        </div>

        <PriceBar />

        <Button>
          <a 
            href={`https://wa.me/${company.phone}?text=${'message'}`}         
            target="_blank"
            rel="noopener noreferrer" 
          >
            FAZER PEDIDO
          </a>
        </Button>
      </div>

    </AppLayout>
  );
}


export default CheckoutPage


export const getStaticPaths = buildStaticPaths
export const getStaticProps = buildStaticProps
