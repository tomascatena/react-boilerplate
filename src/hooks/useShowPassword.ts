import React from 'react';

export const useShowPassword = (type: 'text' | 'password' | 'email') => {
  const [showPassword, setShowPassword] = React.useState(false);

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  return {
    inputType,
    showPassword,
    setShowPassword,
  };
};
