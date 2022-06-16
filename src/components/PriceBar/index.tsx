import React from 'react'
import { useOrder } from '../../hooks/Order';
import { formatPrice } from '../../utils/formatPrice';
import { PriceBarContainer } from './styles';

export const PriceBar: React.FC = () => {
  const { orderPrice } = useOrder()

  return (
    <PriceBarContainer>
      <b>TOTAL:&nbsp;</b>
      <span>{formatPrice(orderPrice)}</span>
    </PriceBarContainer>
  );
}
