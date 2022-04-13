import styled from 'styled-components';

export const IconContainer = styled.div`
  position: relative;
  margin-right: 15%;
`;

export const IconBadgeContainer = styled.div`
  position: absolute;
  top: 0;
  right: -40%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff3366;
  min-width: 15px;
  height: 15px;
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 20%;
`;

export const IconBadgeText = styled.p`
  font-size: 12px;
  text-align: center;
  color: #fff;
`;
