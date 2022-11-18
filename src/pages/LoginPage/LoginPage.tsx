import * as Yup from 'yup';
import { PageTitle } from '@/components/common-styled-components/PageTitle';
import { StyledForm } from '@/components/common-styled-components/StyledForm';
import { useFormik } from 'formik';
import CustomButton from '@/components/common-components/CustomButton/CustomButton';
import CustomInput from '@/components/common-components/CustomInput/CustomInput';
import React from 'react';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Must be 6 characters or more'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div>
      <PageTitle variant="h4">Login Page</PageTitle>

      <StyledForm
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <CustomInput
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
          label="Email"
          type="email"
          variant='filled'
          shouldShowCheckIcon
        />

        <CustomInput
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
          label="Password"
          type="password"
          variant='filled'
          shouldShowCheckIcon
        />

        <CustomButton type='submit'>
          Login
        </CustomButton>
      </StyledForm>
    </div>
  );
};

export default LoginPage;
