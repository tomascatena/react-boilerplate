import CustomInput from '@/components/custom-components/CustomInput/CustomInput';
import React from 'react';

const LoginPage = () => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <h1>LoginPage</h1>

      <CustomInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label="Password"
        helpText="Help text"
        type="password"
        placeholder="Enter a secure password"
        variant='standard'
        shouldShowCheckIcon
        touched
        sx={{
          width: '100%',
        }}
      />
    </div>
  );
};

export default LoginPage;
