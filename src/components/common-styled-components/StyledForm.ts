import { styled } from '@mui/system';

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40rem',
  margin: '0 auto',
  gap: theme.spacing(4),
}));
