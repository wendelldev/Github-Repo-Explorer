import React, { memo, useContext, useEffect, useState } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { GoIssueOpened } from 'react-icons/go';

import { RepositoriesContextType, Repository } from "../../models/repository.model";
import IconBadge from "../IconBadge";
import {
  CardDetails,
  CardIcons,
  CardImg,
  CardContainer,
  RepositoryDescription,
  RepositoryName,
  IconFillBookmark,
  IconBookmarkPlus,
  IconContainer,
} from "./styles";
import { RepositoriesContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

const RepositoryCard: React.FC<{repository: Repository}> = ({
  repository,
}) => {

  const [fav, setFav] = useState(false);
  const navigate = useNavigate();
  const { addFavRepository, removeFavRepository, favRepositoriesIds, updateModalState } = useContext(RepositoriesContext) as RepositoriesContextType;

  const switchFavRepository = () => {
    if (fav) {
      setFav(false);
      removeFavRepository(repository.id);
    } else {
      setFav(true);
      addFavRepository(repository);
    }
  }

  const openProfileUrl = () => {
    navigate('/user-profile', { state: repository.owner.login });
    updateModalState(false);
  }

  useEffect(() => {
    if (favRepositoriesIds.indexOf(repository.id) >= 0) {
      setFav(true);
    } else {
      setFav(false);
    }
  }, [favRepositoriesIds, repository.id])

  return (
    <CardContainer>
      <CardImg src={repository.owner.avatar_url} alt={repository.owner.login} onClick={ openProfileUrl } />
      <CardDetails>
        <RepositoryName>{repository.full_name}</RepositoryName>
        <RepositoryDescription>{repository.description}</RepositoryDescription>
        <CardIcons>
          <IconContainer>
            <IconBadge
              badge_amount={repository.forks_count}
              icon={<BiGitRepoForked size={30} />}
            />
          </IconContainer>

          <IconContainer>
            <IconBadge
              badge_amount={repository.stargazers_count}
              icon={<BiStar size={30} />}
            />
          </IconContainer>

          <IconContainer>
            <IconBadge
              badge_amount={repository.open_issues_count}
              icon={<GoIssueOpened size={30} />}
            />
          </IconContainer>

          <IconContainer>
            <IconBadge
              badge_amount={0}
              icon={ fav ?
                <IconFillBookmark onClick={switchFavRepository} size={30} /> :
                <IconBookmarkPlus onClick={switchFavRepository} size={30} />
              }
            />
          </IconContainer>
        </CardIcons>
      </CardDetails>
    </CardContainer>
  );
}

export default memo(RepositoryCard);
