import styled from "@emotion/styled";

export const IngredientButtonContainer = styled.button`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border-radius: 0.8rem;
  border: 2px solid rgba(255, 255, 255, 0.125);
  padding: 0.5em 1em;
  font-size: 1.5rem;

  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &.selected {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    color: #FFF;
  }
`