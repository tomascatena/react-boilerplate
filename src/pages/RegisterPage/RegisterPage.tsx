import * as Yup from 'yup';
import { PageTitle } from '@/components/common-styled-components/PageTitle';
import { StyledForm } from '@/components/common-styled-components/StyledForm';
import { useFormik } from 'formik';
import CustomButton from '@/components/common-components/CustomButton/CustomButton';
import CustomInput from '@/components/common-components/CustomInput/CustomInput';
import React from 'react';

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const initialValues: FormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Required')
      .min(2, 'Must be at least 2 characters')
      .max(15, 'Must be 15 characters or less'),
    email: Yup.string()
      .required('Required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Must be 6 characters or more'),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
      <PageTitle variant="h4">Register Page</PageTitle>

      <StyledForm
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <CustomInput
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.username}
          touched={formik.touched.username}
          label="Username"
          type="text"
          variant='filled'
          shouldShowCheckIcon
        />

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

        <CustomInput
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
          label="Confirm Password"
          type="password"
          variant='filled'
          shouldShowCheckIcon
        />

        <CustomButton type='submit'>
          Register
        </CustomButton>
      </StyledForm>
    </div>
  );
};

export default RegisterPage;
