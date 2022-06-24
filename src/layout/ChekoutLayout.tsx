import React from 'react'
import { Button } from '../components/Button';
import { PriceBar } from '../components/PriceBar';
import { useOrder } from '../hooks/Order';
import { buildWhatsappString } from '../utils/buildWhatsappString';
import { formatPrice } from '../utils/formatPrice';
import { AppLayout } from './AppLayout';
import { RequestContainer } from './RequestLayout.styles';

interface CheckoutLayoutProps{
  title: string
  phone: string
  children: React.ReactNode
}

export const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({
  title,
  phone,
  children
}) => {
  const { parsedOrder, orderPrice } = useOrder()
  
  return (
    <AppLayout>
      <RequestContainer>
        <div className='section__title__container'>
          <h1 className='section__title__text'>{title}</h1>
        </div>

        <div className="section__content checkout__content">
          {children}
        </div>

        <PriceBar />
        
        <Button className='checkout__btn'>
          <a 
            href={buildWhatsappString({
              phoneNumber: phone,
              base: parsedOrder.base.label,
              size: parsedOrder.size.label,
              filling: parsedOrder.filling.label,
              frosting: parsedOrder.frosting.label,
              extras: parsedOrder.extras.map(extra => extra.label),
              value: formatPrice(orderPrice)
            })}         
            target="_blank"
            rel="noopener noreferrer" 
          >
            FAZER PEDIDO
          </a>
        </Button>
      </RequestContainer>
    </AppLayout>
  );
}
