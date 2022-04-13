import React, { memo, ReactNode } from "react";

import { IconContainer, IconBadgeContainer, IconBadgeText } from "./styles";

interface IconBadgeProps {
  badge_amount: number;
  icon: ReactNode;
}

const IconBadge: React.FC<IconBadgeProps> = ({ badge_amount, icon }) =>
(
  <IconContainer>
    {icon}
    { badge_amount > 0 &&
      <IconBadgeContainer>
        <IconBadgeText>{badge_amount}</IconBadgeText>
      </IconBadgeContainer>
    }
  </IconContainer>
);

export default memo(IconBadge);
