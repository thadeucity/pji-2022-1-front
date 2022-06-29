import styled from "@emotion/styled";

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  padding: 1.5rem;
  color: white;

  .about__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .pic__container {
    border-radius: 100vw;
    width: 250px;
    height: 250px;
    min-height: 250px;
    min-width: 250px;
    overflow: hidden;
    border: 16px solid #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
  }

  .about__text {
    margin-top: 2rem;
  }

  b {
    font-weight: bold;
  }

  p {
    margin-top: 1.5rem;
    line-height: 1.5;
  }

  .place_order__btn {
    margin-top: auto;
    width: 100%;

    button {
      width: 100%;
    }
  }
`
