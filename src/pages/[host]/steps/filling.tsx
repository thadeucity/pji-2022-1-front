import type { NextPage } from 'next'
import { RequestLayout } from '../../../layout/RequestLayout'

const FillingPage: NextPage = () => {
  return (
    <RequestLayout 
      title="Escolha o Recheio"
      previous={{
        label: 'Voltar',
        href: '/steps/base'
      }}
      next={{
        label: 'Escolha a Cobertura',
        href: '/steps/frosting'
      }}
    >
      <p>HERE GOES THE LIST</p>
    </RequestLayout>
  )
}

export default FillingPage