import styled from "styled-components";

export const StyledFavourites = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  backgroud-color: red;
  margin: auto;

  .favourites-top {
    font-family: var(--font-family);
    padding: 12rem 0;
    width: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 120rem;
  }

  .favourites-description {
    display: flex;
    margin-top: 1rem;
    margin-bottom: -10rem;
    gap: 1rem;
  }

  .favourites-count {
    color: hsla(0, 0%, 0%, 0.6);
  }

  .favourites-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 120rem;
  }

  .item-info {
    display: flex;
    justify-content: left;
    padding: 0px 1rem;
    flex-direction: column;
  }

  .item-info-right {
    position: absolute;
    display: flex;
    font-size: 0.5rem;
    margin-left: 12.3rem;
    margin-top: 19.25rem;
    padding: 1.5rem;
  }

  .item-info-right i {
    font-size: 2rem;
  }

  .item-description,
  .colors {
    color: hsla(0, 0%, 0%, 0.6);
  }

  .img-container {
    padding: 0px 9px;
    position: relative;
    min-width: 15rem;
  }

  .photo {
    min-width: 15rem;
    object-fit: scale-down;
    background-color: var(--secondary-background-color);
    height: 200px;
  }

  .favourites-container {
    padding: 2.5rem 0;
    display: inline-flex;
    margin: auto;
    gap: var(--gap);
  }

  .favourites-quantity-container {
    display: inline-flex;
    padding-top: 2rem;
    gap: 1.5rem;
  }

  .minus-icon,
  .plus-icon,
  .favourites-cart-icon,
  .favourites-trash-icon {
    font-size: var(--font-size-sm);
  }

  .favourites-cart-icon,
  .favourites-trash-icon {
    padding-top: 0.5rem;
  }

  .favourites-icon-container {
    padding-top: 10.5rem;
    display: inline-flex;
    gap: 1rem;
  }

  @media screen and (min-width: 450px) {
    .minus-icon,
    .plus-icon,
    .cart-heart-icon,
    .cart-trash-icon,
    .favourites-cart-icon,
    .favourites-trash-icon {
      font-size: 1.8rem;
    }
    .cart-icon-container {
      padding-top: 1.5rem;
    }
    .favourites-icon-container {
      padding-top: 10.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    .minus-icon,
    .plus-icon,
    .cart-heart-icon,
    .cart-trash-icon,
    .favourites-cart-icon,
    .favourites-trash-icon {
      font-size: 2rem;
    }
    .cart-icon-container {
      padding-top: 2rem;
    }
    .favourites-icon-container {
      padding-top: 9.5rem;
    }
  }
`;
