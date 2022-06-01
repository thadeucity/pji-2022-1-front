import React from 'react'
import { CompanyProvider } from './Company';
import { IngredientsProvider } from './Ingredients';
import { OrderProvider } from './Order';

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ 
  children 
}) => {
  return (
    <CompanyProvider>
      <IngredientsProvider>
        <OrderProvider>
          {children}
        </OrderProvider>
      </IngredientsProvider>
    </CompanyProvider>
  );
}
