import styled from "@emotion/styled";

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;


  .checkout__sub_header {
    width: calc(100% + 4rem);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-secondary);
    color: white;
    margin: 0 -2rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
  }

  .cart__items {
    display: flex;
    margin-top: 1rem;
    width: 100%;
  }

  ul {
    width: 100%;
    list-style: none;
  }
  
  li {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  li + li {
    margin-top: 1rem;
  }

  ul, li {
    margin: 0;
  }

  .cart__section_title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
  }

  .cart__section_content {
    padding: 0.5rem 1.5rem;
    padding-bottom: 0;

    p {
      display: flex;

      &:before {
        content: "• ";
        margin-right: 0.5ch;
      }
    }

    p + p {
      margin-top: 0.5rem;
    }

    .dots {
      flex: 1;
      border-bottom: 3px dotted rgba(255, 255, 255, 0.25);
      margin: 0 0.5rem;
    }

    .price {
      font-size: 0.9rem;
      font-weight: 700;
    }
  }
` 