import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fbfcfb;
  font-size: 26px;
  font-weight: 700;
  padding: 3px 15px;
  border-radius: 10px;
  border: 3px solid transparent;
  box-sizing: border-box;

  text-transform: uppercase;
  transition-property: background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  &:hover,
  &:focus {
    border-color: #5cd3a8;
  }
  &.active {
    background-color: #5cd3a8;
    pointer-events: none;
  }
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
