import styled from "@emotion/styled";

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  a, button {
    width: 100%;
  }

  button {
    border-radius: 0.25rem;
  }

  a + a {
    margin-left: 2px;
  }

  button {
    font-size: 1.25rem;
    svg {
      stroke-width: 4px;
    }
  }
`