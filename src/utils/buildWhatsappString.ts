interface BuildWhatsappStringProps {
  phoneNumber: string
  base: string
  size: string
  filling: string
  frosting: string
  value: string
  extras: string[]
}

export const buildWhatsappString = ({
  phoneNumber,
  base,
  size,
  filling,
  frosting,
  extras,
  value
}:BuildWhatsappStringProps): string => {
  const baseAndSizeString = `*Base:*\n  ${base} (${size})`
  const fillingString = `*Recheio:*\n  ${filling}`
  const frostingString = `*Cobertura:*\n  ${frosting}`
  const extrasString = extras?.length > 0 
    ? `*Extras:*\n${extras.map(extra => `  - ${extra}`).join('\n')}` 
    : ''

  const valueString = `*Valor do Pedido:*\n  R$ ${value}`
  const deliveryString = `*Entrega:* À combinar`
  const paymentMethodString = `*Pagamento:* À combinar`

  const message = `*Pedido via Cake-Builder*
  
${baseAndSizeString}

${fillingString}

${frostingString}

${extrasString}

${valueString}

${deliveryString}
${paymentMethodString}`

  const uriMessage = encodeURIComponent(message)

  return `https://wa.me/${phoneNumber}?text=${uriMessage}`
}