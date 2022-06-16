import React from 'react'
import { ButtonsBar } from '../components/ButtonsBar';
import { PriceBar } from '../components/PriceBar';
import { AppLayout } from './AppLayout';
import { RequestContainer } from './RequestLayout.styles';

interface RequestLayoutProps{
  title: string
  next: {
    label: string,
    href: string
  }
  previous: {
    label: string,
    href: string
  }
  showPriceBar?: boolean
  children: React.ReactNode
}

export const RequestLayout: React.FC<RequestLayoutProps> = ({
  title,
  previous,
  next,
  showPriceBar = false,
  children
}) => {
  return (
    <AppLayout>
      <RequestContainer>
        <div className='section__title__container'>
          <h1 className='section__title__text'>{title}</h1>
        </div>

        <div className="section__content">
          {children}
        </div>

        {showPriceBar && <PriceBar />}
        <ButtonsBar previous={previous} next={next}/>
      </RequestContainer>
    </AppLayout>
  );
}
