import styled from "@emotion/styled";

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  width: 100%;

  a, button {
    width: 100%;
  }

  a + a {
    margin-left: 1rem;
  }

  button {
    font-size: 1.25rem;
    svg {
      stroke-width: 4px;
    }
  }
`