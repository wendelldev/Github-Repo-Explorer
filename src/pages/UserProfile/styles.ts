import styled from "styled-components";
import { PageTitleContainer } from "../../styles/global";
import { BsArrowLeftCircle } from 'react-icons/bs';
import { shade } from "polished";

export const UserInfoSection = styled.section`
  max-width: 900px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  @media(max-width: 547px) {
    flex-direction: column;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  max-width: 250px;
  width: 90%;
  border-radius: 50%;
`;

export const UserName = styled.h3`

`;

export const LinkButton = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  background: #ff3366;
  padding: 8px;
  border-radius: 5px;
  transition: background-color .2s;

  &:hover {
    cursor: pointer;
    background: ${shade(0.2, '#FF3366')};
  }
`;

export const InfoDivider = styled.div`
  width: 2px;
  height: 80px;
  background: linear-gradient(90deg, rgba(83,0,20,1) 0%, rgba(255,51,102,1) 0%, rgba(184,0,255,1) 100%);

  @media(max-width: 547px) {
    display: none;
  }
`;

export const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserFollowersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const Followers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Following = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AvatarsContainer = styled.div`
  flex: 1;
`;

export const FollowersAvatar = styled(Avatar)`
  width: 35px;
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 4px;

  &:hover {
    cursor: pointer;
    border: 2px solid rgba(255,51,102,1);
  }
`;

export const FollowersText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const BiografyText = styled.h4`
  text-align: justify;
`;


export const CompaniesLinksLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const DetailsLine = styled(CompaniesLinksLine)`

`;

export const CompanyLink = styled.a.attrs({
  target: '_blank'
})`
  text-decoration: none;
  font-weight: bold;
  color: #000000;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #000000;
  }
`;

export const PageTitleWithBack = styled(PageTitleContainer)`
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-bottom: 10px;
`;

export const Line = styled.div`
  width: 150px;
  height: 2px;
  background: linear-gradient(90deg, rgba(83,0,20,1) 0%, rgba(255,51,102,1) 0%, rgba(184,0,255,1) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BackButton = styled(BsArrowLeftCircle).attrs({
  size: 35,
})`
  margin-right: 20px;
  cursor: pointer;
`;

export const ResultContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  padding: 5px;
`;

export const ResultsAmount = styled.strong`
`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin-top: 50px;
  margin-bottom: 20px;
  max-width: 900px;
  width: 80%;

  @media (max-width: 400px) {
    width: 90%;
  }
`;


