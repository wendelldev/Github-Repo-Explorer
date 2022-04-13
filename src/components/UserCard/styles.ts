import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: 0.5s;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  @media(max-width: 375px) {
    flex-direction: column;
  }
`;

export const CardImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

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

export const UserName = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
  word-break: break-word;
`;
