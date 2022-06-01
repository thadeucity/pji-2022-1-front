import type { NextPage } from 'next'
import { RequestLayout } from '../../../layout/RequestLayout'

const BasePage: NextPage = () => {
  return (
    <RequestLayout 
      title="Escolha a Massa"
      previous={{
        label: 'Voltar',
        href: '/steps/size'
      }}
      next={{
        label: 'Escolha o Recheio',
        href: '/steps/filling'
      }}
    >
      <p>HERE GOES THE LIST</p>
    </RequestLayout>
  )
}

export default BasePage