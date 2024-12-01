import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid2';

import { Email } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../state/authentication/Action';
//import { useDispatch, useSelector } from 'react-redux';
//import { loginUser, userProfile } from '../../redux/slices/authSlice';
//import { toast } from 'react-toastify';
//import StatusCode from '../../utils/StatusCode';
const initialValues={
  email:"",
  password:""
}
function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { user, status, message, error } = useSelector(state => state.auth)
/*
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate the field on change
    validationSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        setErrors({
          ...errors,
          [name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.message,
        });
      });
  };

  /*useEffect(() => {
    if (error) {
      toast.error(`Error: ${error?.error}`);
    }
    if (user && status === StatusCode.SUCCESS) {
      toast.success(message)
      setTimeout(() => {
        dispatch(userProfile())
        navigate('/');
      }, 2000);
    }
  }, [user, error, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        dispatch(loginUser(values))
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };*/
  const handleSubmit=(values)=>{
    console.log("form value",values)
    dispatch(LoginUser({userData:values,navigate}))
  };

  return (
    <div>
      <Typography variant='h5' className='text-center'>Login</Typography>
     <Formik onSubmit={handleSubmit} initialValues={initialValues}>
     <Form >
        
            <Field
            as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              //value={values.username}
              //onChange={handleChange}
              //error={Boolean(errors.username)}
              //helperText={errors.username}
              margin="normal"
            />
          
            <Field
            as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              //value={values.password}
              //onChange={handleChange}
              //error={Boolean(errors.password)}
             // helperText={errors.password}
              margin="normal"
            />
         
        <Button sx={{ marginTop: 2, padding: '1rem' }} fullWidth type='submit' variant='contained'>Login</Button>
      </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Don't have an account?
        <Button size='small' onClick={() => navigate('/account/register')}>Register</Button>
      </Typography>
    </div>
  );
}

export default LoginForm;
