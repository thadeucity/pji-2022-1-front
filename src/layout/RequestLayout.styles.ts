import styled from "@emotion/styled";

export const RequestContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: inherit;
  overflow: hidden;
  
  .section__title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #241817;
    
    width: 100%;
    max-width: 100%;
    padding: 1em 1.5rem;
  }

  .section__title__text {
    font-size: 1.75rem;
    color: white;
    width: 100%;
    text-align: center;
  }


  .section__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    max-width: 100%;

    margin-top: 2rem;
    margin-bottom: 3rem;
    padding: 0 2rem;
    flex: 1;

    overflow-y: auto;
    overflow-x: hidden;
  }

  .checkout__content {
    margin-top: 0;
  }

  .checkout__btn {
    width: 100%;
    height: 4rem;
    border-radius: 0.125rem;
  }
`