import styled from "@emotion/styled";

export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--color-primary);

  .app__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    min-width: 200px;
    max-width: 450px;
    height: 100vh;
    border-radius: 2rem;
    
    max-height: 800px;

    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;

      box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, 0.1);
      pointer-events: none;
    }
  }

  @media (max-width: 460px) {
    .app__content {
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
    }
  }
`