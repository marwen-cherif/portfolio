import styled from "styled-components";

export const Button = styled.button`
  transition: all 100ms ease-in-out;

  & svg {
    fill: rgb(212, 212, 216);
    transition: all 100ms ease-in-out;
  }
  &:hover svg {
    fill: rgb(31, 31, 31);
  }
`;

export const LinkButton = styled.a`
  transition: all 100ms ease-in-out;

  & svg {
    fill: rgb(212, 212, 216);
    transition: all 100ms ease-in-out;
  }
  &:hover svg {
    fill: rgb(31, 31, 31);
  }
`;
