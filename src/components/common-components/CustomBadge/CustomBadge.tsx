import { StyledCustomBadge } from './CustomBadge.styled';
import React from 'react';

type Props = {
  /**
   * The text to display inside the badge
   */
  children: React.ReactNode;
  /**
   * The color of the badge (primary, secondary, success, error, warning, info)
   */
  badgeColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The color of the text (black ,white)
   */
  textColor?: 'white' | 'black';
};

/**
 * A custom badge component
 */
const CustomBadge = ({
  children,
  badgeColor,
  textColor
}: Props) => {
  return (
    <StyledCustomBadge
      badgeColor={badgeColor}
      textColor={textColor}
    >
      {children}
    </StyledCustomBadge>
  );
};

export default CustomBadge;
