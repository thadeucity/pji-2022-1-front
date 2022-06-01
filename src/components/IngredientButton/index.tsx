import React from 'react'
import { IngredientButtonContainer as Container } from './styles';

interface IngredientButtonProps{
  children: React.ReactNode
  isSelected?: boolean
  onClick: () => void
}

export const IngredientButton: React.FC<IngredientButtonProps> = ({
  children,
  isSelected = false,
  onClick
}) => {
  return (
    <Container 
      type="button" 
      className={`${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
