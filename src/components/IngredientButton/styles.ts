import styled from "@emotion/styled";

export const IngredientButtonContainer = styled.button`
  background-color: #DDD;
  color: #fff;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.5em 1em;
  font-size: 1.5rem;

  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &.selected {
    background-color: var(--color-secondary);
    color: #FFF;
  }
`