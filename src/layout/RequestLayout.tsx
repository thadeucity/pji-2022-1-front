import React from 'react'
import { ButtonsBar } from '../components/ButtonsBar';
import { AppLayout } from './AppLayout';

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
  children: React.ReactNode
}

export const RequestLayout: React.FC<RequestLayoutProps> = ({
  title,
  previous,
  next,
  children
}) => {
  return (
    <AppLayout>
      <div className='section__title__container'>
        <h1 className='section__title__text'>{title}</h1>
      </div>

      <div className="section__content">
        {children}
      </div>

      <ButtonsBar previous={previous} next={next}/>
    </AppLayout>
  );
}
