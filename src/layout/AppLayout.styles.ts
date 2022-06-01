import styled from "@emotion/styled";

export const AppLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;

  .color__band {
    background-color: pink;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5vh;
    opacity: 0;
  }

  .app__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    min-width: 200px;
    max-width: 360px;
  }

  .section__title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    
    width: 100%;
    max-width: 100%;
    padding: 1em 1.5rem;
    border-radius: 1rem;
  }

  .section__title__text {
    font-size: 2.25rem;
    color: white;
    width: 100%;
    text-align: center;
  }

  .section__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 100%;

    margin-top: 2rem;
  }
`