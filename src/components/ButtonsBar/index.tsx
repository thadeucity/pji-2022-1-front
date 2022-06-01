import Link from 'next/link'
import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { Button } from '../Button'
import { ButtonsBarContainer } from './styles'

interface ButtonsBarProps{
  next: {
    label: string,
    href: string
  }
  previous: {
    label: string,
    href: string
  }
}

export const ButtonsBar: React.FC<ButtonsBarProps> = ({
  next,
  previous
}) => {
  return (
    <ButtonsBarContainer>
      <Link href={previous.href}>
          <a>
            <Button aria-label={previous.label}>
              <FiChevronLeft/>
            </Button>
          </a>
        </Link>

        <Link href={next.href}>
          <a>
            <Button aria-label={previous.label}>
              <FiChevronRight />
            </Button>
          </a>
        </Link>
    </ButtonsBarContainer>
  );
}
