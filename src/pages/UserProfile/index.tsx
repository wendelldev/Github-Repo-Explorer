import React, { Fragment, useEffect, useState } from "react";
import RepositoryCard from "../../components/RepositoryCard";
import { Repository } from "../../models/repository.model";
import { PageTitle, MoreResultsButton, PageContainer } from "../../styles/global";
import { useLocation, useNavigate } from 'react-router-dom';
import { getGenericData, getUserFollowers, getUserProfile } from "../../services/api";
import { User } from "../../models/user.model";
import { getRepositoriesByUsername, getUserFollowing } from './../../services/api';
import { SearchResultUser } from './../../models/user.model';
import LinksParser from "../../util/linksParser";
import animationData from '../../assets/lottie-animations/search-file.json';
import { LottieAnimation } from "../Dashboard/styles";
import {
  Avatar,
  AvatarContainer,
  BackButton,
  BiografyText,
  CompaniesLinksLine,
  CompanyLink,
  DetailsContainer,
  DetailsLine,
  Followers,
  FollowersAvatar,
  Following,
  InfoDivider,
  Line,
  PageTitleWithBack,
  Repositories,
  ResultContainer,
  ResultsAmount,
  UserDetailsContainer,
  UserFollowersContainer,
  UserInfoSection,
  LinkButton,
  UserName,
  AvatarsContainer
} from "./styles";


interface Pagination {
  prev: string;
  next: string;
  last: string;
  first: string;
}

const initialPaginationState: Pagination = {
  prev: "",
  next: "",
  last: "",
  first: "",
}

const UserProfile: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isProfileLoading, setIsProfileLoading] = useState<boolean>(true);
  const [followers, setFollowers] = useState<SearchResultUser[]>([]);
  const [following, setFollowing] = useState<SearchResultUser[]>([]);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [pagination, setPagination] = useState<Pagination>(initialPaginationState);
  const [isRepositoriesLoading, setIsRepositoriesLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setIsProfileLoading(true);
    (async () => {
      const userProfileResponse = await getUserProfile(String(state));
      const repositoriesResponse = await getRepositoriesByUsername(String(state));
      const followersResponse = await getUserFollowers(String(state));
      const followingResponse = await getUserFollowing(String(state));

      setUserProfile(userProfileResponse.data);
      setIsProfileLoading(false);
      setRepositories(repositoriesResponse.data);
      if (repositoriesResponse.headers.link) {
        setPagination(LinksParser(repositoriesResponse.headers.link));
      }
      setFollowers(followersResponse.data);
      setFollowing(followingResponse.data);
      setIsProfileLoading(false)
    })();
  }, [state])

  async function getRepositoriesNextPage(url: string) {
    const response = await getGenericData(url);
    setRepositories(repositories.concat(response.data));
    setPagination(LinksParser(response.headers.link));
    setIsRepositoriesLoading(false);
  }

  const handleNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsRepositoriesLoading(true);
    getRepositoriesNextPage(pagination.next);
  }

  const handleBackButton = () => {
    navigate('/');
  }

  const handleFollowerPage = (url: string) => {
    window.open(url, '_blank');
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <PageContainer>
      {isProfileLoading &&
        <LottieAnimation options={defaultOptions} width="30%" />
      }

      {!isProfileLoading && (
        <Fragment>
          <PageTitleWithBack>
            <BackButton onClick={handleBackButton} />
            <PageTitle>Voltar</PageTitle>
            <Line />
          </PageTitleWithBack>
          <UserInfoSection>
            <AvatarContainer>
              <Avatar src={ userProfile?.avatar_url } alt={ userProfile?.login } />
              <UserName>{ userProfile?.name }</UserName>
              <LinkButton href={userProfile?.html_url} target="_blank">@{ userProfile?.login }</LinkButton>
            </AvatarContainer>
            <InfoDivider />
            <DetailsContainer>
              <UserDetailsContainer>
                <BiografyText>{userProfile?.bio ? userProfile.bio : 'Este usuário não possui biografia.' }</BiografyText>
                {userProfile?.email && (<DetailsLine>{userProfile.email}</DetailsLine>)}
                {userProfile?.location && (<DetailsLine>{userProfile.location}</DetailsLine>)}
                {userProfile?.blog && (<CompanyLink href={userProfile.blog}>{userProfile.blog}</CompanyLink>)}
                {userProfile?.company && (
                  <CompaniesLinksLine>
                    {userProfile.company.replace(/@/gi, '').split(' ').map((company: string) => (
                      <CompanyLink key={company} href={`https://github.com/${company}`}>@{company}</CompanyLink>
                    ))}
                  </CompaniesLinksLine>
                )}
              </UserDetailsContainer>
              <UserFollowersContainer>
                <Followers>
                  <CompanyLink
                    href={`https://github.com/${userProfile?.login}?tab=followers`}>
                      Seguidores {userProfile?.followers && userProfile.followers > 0 ? `(${ userProfile?.followers })` : ''}
                  </CompanyLink>
                  <AvatarsContainer>
                    {followers.map((follower, index) => {
                      if (index > 9) {
                        return null
                      }

                      return (
                        <FollowersAvatar
                          key={follower.node_id}
                          src={follower.avatar_url}
                          alt={follower.login}
                          onClick={() => handleFollowerPage(follower.html_url)}
                        />
                      );
                    })}
                  </AvatarsContainer>
                </Followers>
                <Following>
                  <CompanyLink
                    href={`https://github.com/${userProfile?.login}?tab=following`}>
                      Contas seguidas {userProfile?.following && userProfile.following > 0 ? `(${ userProfile?.following })` : ''}
                  </CompanyLink>
                  <AvatarsContainer>
                    {following.map((follower, index) => {
                      if (index > 9) {
                        return null;
                      }

                      return (
                        <FollowersAvatar
                          key={follower.node_id}
                          src={follower.avatar_url}
                          alt={follower.login}
                          onClick={() => handleFollowerPage(follower.html_url)}
                        />
                      );
                    })}
                  </AvatarsContainer>
                </Following>
              </UserFollowersContainer>
            </DetailsContainer>
          </UserInfoSection>

          <Repositories>
            <ResultContainer>
              <ResultsAmount>Repositórios</ResultsAmount>
            </ResultContainer>

            {repositories.map((repository: Repository) => (
              <RepositoryCard key={ repository.id } repository={ repository } />
            ))}

            {pagination.next !== "" && (
              <MoreResultsButton onClick={handleNextPage}>
                {isRepositoriesLoading ? 'Caregando...' : 'Mais resultados'}
              </MoreResultsButton>
            )}
          </Repositories>
        </Fragment>
      )}
    </PageContainer>
  );
};

export default UserProfile;
