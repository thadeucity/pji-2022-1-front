import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  --btn-hover-brightness: 0.88;

  position: relative;
  padding: 0.75em 1.25em;
  border-radius: 0.5em;
  border: 0;

  font-size: 1rem;
  font-weight: 700;
  background-color: var(--color-primary);
  color: #ffffff;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &.button__outline {
    border: 1px solid var(--color-primary);
    background-color: transparent;
    color: var(--color-primary);

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5em;
      transition: opacity 250ms;
      box-shadow: 0 0 10px 1px var(--color-primary);
      opacity: 0;
    }
  }

  &:hover {
    filter: brightness(var(--btn-hover-brightness));

    &.button__outline::after {
      opacity: 0.25;
    }
  }

  &:disabled {
    opacity: 0.7;
    filter: saturate(0.5);
    cursor: default;
    pointer-events: none;
    --btn-hover-brightness: 1;
    &:hover .button__outline::after {
      opacity: 0;
    }
  }
` 