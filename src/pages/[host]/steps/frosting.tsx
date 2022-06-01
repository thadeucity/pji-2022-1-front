import type { NextPage } from 'next'
import { RequestLayout } from '../../../layout/RequestLayout'

const FrostingPage: NextPage = () => {
  return (
    <RequestLayout 
      title="Escolha a Cobertura"
      previous={{
        label: 'Voltar',
        href: '/steps/filling'
      }}
      next={{
        label: 'Escolha os Adicionais',
        href: '/steps/extras'
      }}
    >
      <p>HERE GOES THE LIST</p>
    </RequestLayout>
  )
}

export default FrostingPage