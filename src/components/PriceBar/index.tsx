import React from 'react'
import { useOrder } from '../../hooks/Order';
import { formatPrice } from '../../utils/formatPrice';

export const PriceBar: React.FC = () => {
  const { orderPrice } = useOrder()

  return (
    <div>
      <b>Total:</b>
      <span>{formatPrice(orderPrice)}</span>
    </div>
  );
}
