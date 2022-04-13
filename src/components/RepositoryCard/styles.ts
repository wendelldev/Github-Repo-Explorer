import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media(max-width: 375px) {
    flex-direction: column;
  }
`;

export const CardImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;

  @media(max-width: 375px) {
    margin-bottom: 10px;
  }
`;

export const CardDetails = styled.div`
  margin: 0 16px;
  flex: 1;

  @media(max-width: 375px) {
    text-align: center;
  }
`;

export const CardIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  gap: 15%;

  @media(max-width: 375px) {
    justify-content: center;
  }
`;

export const RepositoryName = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
  word-break: break-word;
`;

export const RepositoryDescription = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;

  @media(max-width: 375px) {
    text-align: justify;
  }
`;

export const IconContainer = styled.div`

`;

export const IconFillBookmark = styled(BsFillBookmarkCheckFill)`
  min-width: 30px;
  color: #ff3366;
  cursor: pointer;
`;

export const IconBookmarkPlus = styled(BsBookmarkPlus)`
  min-width: 30px;
  cursor: pointer;
`;
