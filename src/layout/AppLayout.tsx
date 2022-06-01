import React from 'react';
import { useCompany } from '../hooks/Company';
import { AppLayoutContainer as Container } from './AppLayout.styles';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps): React.ReactElement => {
  const { data } = useCompany()

  return (
    <Container>
      <div aria-hidden className='color__band'/>
      <div className='app__content'>
        {data?.id ? children : 'Carregando...'}
      </div>
    </Container>
  );
}