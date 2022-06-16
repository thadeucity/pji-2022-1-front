import Link from 'next/link';
import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { useOrder } from '../../hooks/Order';
import { formatPrice } from '../../utils/formatPrice';
import { CheckoutContent as Content } from './CheckoutPage.styles';

interface CheckoutPageProps{

}

interface CartSectionTitleProps {
  href: string
  title: string
}

const CartSectionTitle = ({ href, title }: CartSectionTitleProps) => {
  return (
    <div className='cart__section_title'>
      <strong>{title}:</strong>
      <Link href={href} passHref>
        <a><FiEdit/></a>
      </Link>
    </div>
  )
}

export const CheckoutPageComponent: React.FC<CheckoutPageProps> = ({}) => {
  const { parsedOrder } = useOrder()

  return (
    <Content>
      <div className='checkout__sub_header'>
        <h2>Pedido</h2>
      </div>

      <div className='cart__items'>
        <ul>
          <li>
            <CartSectionTitle title={'Tamanho'} href="/steps/size"/>
            <div className='cart__section_content'>
              <p>{parsedOrder.size.label}</p>
            </div>
          </li>
          <li>
            <CartSectionTitle title={'Base'} href="/steps/base"/>
            <div className='cart__section_content'>
              <p>
                <span>
                  {parsedOrder.base.label}
                </span>
                <span className='dots'/>
                <span className='price'>
                  {formatPrice(parsedOrder.base.price)}
                </span>
              </p>
            </div>
          </li>
          <li>
            <CartSectionTitle title={'Recheio'} href="/steps/filling"/>
            <div className='cart__section_content'>
              <p>
                <span>
                  {parsedOrder.filling.label}
                </span>
                <span className='dots'/>
                <span className='price'>
                  + {formatPrice(parsedOrder.filling.price)}
                </span>
              </p>
            </div>
          </li>
          <li>
            <CartSectionTitle title={'Cobertura'} href="/steps/frosting"/>
            <div className='cart__section_content'>
              <p>
                <span>
                  {parsedOrder.frosting.label}
                </span>
                <span className='dots'/>
                <span className='price'>
                  + {formatPrice(parsedOrder.frosting.price)}
                </span>
              </p>
            </div>
          </li>
          <li>
            <CartSectionTitle title={'Extras'} href="/steps/extras"/>
            <div className='cart__section_content'>
              {parsedOrder.extras.map(extra => (
                <p key={extra.label}>
                  <span>
                    {extra.label}
                  </span>
                  <span className='dots'/>
                  <span className='price'>
                    + {formatPrice(extra.price)}
                  </span>
                </p>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </Content>
  );
}
