import styled from "styled-components";

export const Button = styled.button`
  & svg {
    fill: rgb(212, 212, 216);
    transition: 100ms ease-in-out;
  }
  &:hover svg {
    fill: rgb(31, 31, 31);
  }
`;

export const LinkButton = styled.a`
  & svg {
    fill: rgb(212, 212, 216);
    transition: 100ms ease-in-out;
  }
  &:hover svg {
    fill: rgb(31, 31, 31);
  }
`;
