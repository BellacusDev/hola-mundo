import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup'; 
 
// models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
  
  let user = new User();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }
  
  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, 'Username too short')
        .max(12, 'User name too long')
        .required('User name is required'),
      email: Yup.string()
        .email('invalid Email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password too short'),
      confirm: Yup.string()
        .when('password', {
          is: value => (value && value.length > 0 ? true : false),
          then: () => Yup.string().test('passwords-match', 'Passwords must match', function(value) {
            return value === this.resolve(Yup.ref('password'));
          })
        })
        .required('You must confirm the password')
    }
  )
  
  const submit = () => {
    alert('register user')
  }
  
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={ async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null,2));
        }}
      >
        {({ values, 
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur, }) => (
            <Form>
              <label htmlFor='username'>Username:</label>
              <Field id='username' name='username' placeholder='Your name...'></Field>
              {
                errors.username && touched.username && (
                      <ErrorMessage name='username' component='div'></ErrorMessage>
                )
              }

              <label htmlFor='email'>Email:</label>
              <Field id='email' name='email' placeholder='Your email...' type='email'></Field>
              {
                errors.email && touched.email && (
                      <ErrorMessage name='email' component='div'></ErrorMessage>
                )
              }

              <label htmlFor='password'>Password:</label>
              <Field id='password' name='password' placeholder='new password...' type='password'></Field>
              {
                errors.password && touched.password && (
                      <ErrorMessage name='password' component='div'></ErrorMessage>
                  )
              }

              <label htmlFor='confirm'>Confirm:</label>
              <Field id='confirm' name='confirm' placeholder='confirm password...' type='password'></Field>
              {
                errors.confirm && touched.confirm && (
                      <ErrorMessage name='confirm' component='div'></ErrorMessage>
                  )
              }

              <button type='submit'>Register</button>
              { isSubmitting ? (<p>Sending your credentials...</p>) : null}
            </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default RegisterFormik;
