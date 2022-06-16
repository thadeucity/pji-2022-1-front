import React from 'react'
import { Button } from '../components/Button';
import { PriceBar } from '../components/PriceBar';
import { AppLayout } from './AppLayout';
import { RequestContainer } from './RequestLayout.styles';

interface CheckoutLayoutProps{
  title: string
  phone: string
  message: string
  children: React.ReactNode
}

export const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({
  title,
  phone,
  message,
  children
}) => {
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
            href={`https://wa.me/${phone}?text=${message}`}         
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
