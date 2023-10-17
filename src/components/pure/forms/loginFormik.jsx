import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialsCredentials = {
  email: '',
  password: ''
}

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email('invalid Email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }
)



const LoginFormik = () => {
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={ initialsCredentials }
        validationSchema={ loginSchema } // esquema de validacion yup
        onSubmit={ async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null,2));
          localStorage.setItem('credentials', values)
        }}
      >

      {/* optenemos props desde Formik */}
      {({ values, 
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur, }) => (
            <Form>
              <label htmlFor='email'>Email</label>
              <Field id='email' name='email' placeholder='Sergio@acme.com' type='email'></Field>
              {
                errors.email && touched.email && (
                      <ErrorMessage name='email' component='div'></ErrorMessage>
                )
              }

              <label htmlFor='password'>Password</label>
              <Field id='password' name='password' placeholder='Password' type='password'></Field>
              {
                errors.password && touched.password && (
                      <ErrorMessage name='password' component='div'></ErrorMessage>
                  )
              }
          
              <button type='submit'>Submit</button>
              { isSubmitting ? (<p>Login your credentials...</p>) : null}
            </Form>
        )
      }

      </Formik>
    </div>
  );
}

export default LoginFormik;
