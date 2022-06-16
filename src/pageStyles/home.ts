import styled from "@emotion/styled";

export const HomeButtonsBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4rem;

  width: 100%;

  a, button {
    width: 100%;
  }

  a + a {
    margin-top: 0.75rem;
  }

  button {
    font-size: 1.25rem;
  }
`