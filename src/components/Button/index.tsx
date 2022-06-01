import React from 'react'
import { ButtonContainer as Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  outlined,
  className,
  children,
  ...props
}) => {
  return (
    <Container 
      type="button"
      className={`${className} ${outlined ? 'button__outline' : ''}`}
      {...props} 
    >
      <span className="button__content">
        {children}
      </span>
    </Container>
  );
}
