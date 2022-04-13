import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

import {
  CardDetails,
  CardIcons,
  CardContainer,
  RepositoryDescription,
  RepositoryName,
  IconContainer,
} from "./styles";

const SkeletonCard: React.FC = () => {

  return (
    <CardContainer>
      <Skeleton circle width={75} height={75} />
      <CardDetails>
        <RepositoryName>{ <Skeleton /> }</RepositoryName>
        <RepositoryDescription>{ <Skeleton count={2} /> }</RepositoryDescription>
        <CardIcons>
          <IconContainer>
            <Skeleton width={30} height={30} />
          </IconContainer>

          <IconContainer>
            <Skeleton width={30} height={30} />
          </IconContainer>

          <IconContainer>
            <Skeleton width={30} height={30} />
          </IconContainer>

          <IconContainer>
            <Skeleton width={30} height={30} />
          </IconContainer>
        </CardIcons>
      </CardDetails>
    </CardContainer>
  );
}

export default SkeletonCard;
