
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

type StyledCustomBadgeProps = {
  /**
   * The color of the badge (primary, secondary, success, error, warning, info)
   */
  badgeColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /**
    * The color of the text (black ,white)
    */
  textColor?: 'white' | 'black';
}

/**
 * The StyledCustomBadge component is a styled version of the Typography component.
 */
export const StyledCustomBadge = styled(Typography, {
  shouldForwardProp: (props) => {
    return props !== 'badgeColor' && props !== 'textColor';
  },
})<StyledCustomBadgeProps>(({
  theme,
  badgeColor = 'primary',
  textColor = 'black',
}) => ({
  background: theme.palette[badgeColor].main,
  color: textColor === 'white' ? theme.palette.common.white : theme.palette.common.black,
  borderRadius: theme.spacing(2),
  padding: '0.1rem 0.8rem',
  display: 'inline-block',
  fontSize: '0.9rem'
}));
