import type { NextPage } from 'next'
import { RequestLayout } from '../../../layout/RequestLayout'

const FrostingPage: NextPage = () => {
  return (
    <RequestLayout 
      title="Escolha os Adicionais"
      previous={{
        label: 'Voltar',
        href: '/steps/frosting'
      }}
      next={{
        label: 'Checkout',
        href: '/checkout'
      }}
    >
      <p>HERE GOES THE LIST</p>
    </RequestLayout>
  )
}

export default FrostingPage