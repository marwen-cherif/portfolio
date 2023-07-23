import styled from "styled-components";

export const $Image = styled.img`
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(110%);
    filter: drop-shadow(30px 10px 4px rgba(23, 12, 12, 0.86));
  }
`;
