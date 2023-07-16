import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  color: rgb(31 31 31);
  font-weight: bold;
  transition: all 200ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
  font-size: 1.3rem;

  &:hover {
    transform: scale(1.1);
  }
`;
