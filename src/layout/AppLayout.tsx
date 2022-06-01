import React from 'react';
import { AppLayoutContainer as Container } from './AppLayout.styles';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps): React.ReactElement => {
  return (
    <Container>
      <div aria-hidden className='color__band'/>
      <div className='app__content'>
        {children}
      </div>
    </Container>
  );
}