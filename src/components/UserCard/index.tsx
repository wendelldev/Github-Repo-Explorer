import React, { memo } from "react";
import { SearchResultUser } from "../../models/user.model";
import { useNavigate } from 'react-router-dom';
import { CardContainer, CardDetails, CardImg, UserName } from "./styles";

const UserCard: React.FC<{user: SearchResultUser}> = ({
  user
}) => {
  const navigate = useNavigate();

  const navigatoToUserProfile = () => {
    navigate('/user-profile', { state: user.login });
  }

  return (
    <CardContainer onClick={navigatoToUserProfile}>
      <CardImg src={ user.avatar_url } alt={ user.login } />
      <CardDetails>
        <UserName>{ user.login }</UserName>
      </CardDetails>
    </CardContainer>
  );
}

export default memo(UserCard);
