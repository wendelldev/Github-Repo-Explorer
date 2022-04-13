import { FiGithub } from "react-icons/fi";
import styled from "styled-components";

export const HeaderContainer = styled.header`

  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 70px;
  padding: 0px 20px 0 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #fff;
`;

export const HeaderLogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const GitHubIcon = styled(FiGithub)`
  min-width: 30px;
  font-size: 30px;
`;

export const HeaderTitle = styled.h3`
  color: #000;
`;

export const HeaderFavButtonContainer = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const MessageText = styled.h3`
  font-size: 18px;
  color: #d1d1d1;
`
