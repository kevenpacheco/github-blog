import styled from "styled-components";
import headerCoverPNG from '../../assets/header-cover.png';

export const HeaderContainer = styled.header`
  padding: 4rem 1rem 0;
  background: url(${headerCoverPNG}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;