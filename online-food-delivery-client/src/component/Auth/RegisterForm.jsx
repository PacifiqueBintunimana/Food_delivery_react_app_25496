import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid2';

import { useNavigate } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import StatusCode from '../../utils/StatusCode';
//import { toast } from 'react-toastify';
//import { registerUser } from '../state/authentication/Action';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from '../state/authentication/Action';
const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}
function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 /* const { user, status, message } = useSelector((state) => state.auth);

  console.log(`message: ${message}, status: ${status}`)

  const [values, setValues] = useState({
    fullName: '',
    password: '',
    email: '',
    role: 'ROLE_CUSTOMER'
  });

  const [errors, setErrors] = useState({
    fullName: '',
    password: '',
    email: '',
    role: '',
  });

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full Name is required')
      .min(2, 'Full Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must include uppercase letter')
      .matches(/[a-z]/, 'Must include lowercase letter')
      .matches(/[0-9]/, 'Must include a number'),
    role: Yup.string().required('Role is required')
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
/*
  useEffect(() => {
    if (status === StatusCode.ERROR) {
      // Log specific error for debugging
      console.error('Registration Error:', message);
      toast.error(message || 'Registration failed');
    }
    if (user && status === StatusCode.SUCCESS) {
      toast.success(message);
      navigate('/account/login');
    }
  }, [user, status, message, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        dispatch(registerUser(values));
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
    dispatch(registerUser({userData:values,navigate}))
  };

  return (
    <div>
    <Typography variant='h5' className='text-center'>Register</Typography>
    <Formik onSubmit={handleSubmit}
          initialValues={initialValues}
          
          
        >
          <Form>

          <Field
                  as={TextField}
                  name="fullName"
                  label="fullName"
                  fullWidth
                  variant="outlined"
                   margin="normal"
                             />
            
                <Field
                  as={TextField}
                  name="email"
                  label="email"
                  fullWidth
                  variant="outlined"
                   margin="normal"
                             />
              
                <Field
                  as={TextField}
                  name="password"
                  label="password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                 />
          
  <Field
  fullWidth
  margin="normal"
  as={Select}
  labelId="role-simple-select-label"
    id="demo-simple-select"
    //value={age}
    label="role"
    name="role"
   // onChange={handleChange}
  >
    <MenuItem value={"ROLE_CUSTOMER"}>customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>restaurant owner</MenuItem>
   
  </Field>

                
                <Button sx={{mt:2 ,padding:"1rem"}}fullWidth variant='contained' type='submit' color='primary'>Register</Button>
             
          </Form>
        </Formik>
    <Typography variant='body2' align='center' sx={{ mt: 3 }}>
      already have an account?
      <Button size='small' onClick={() => navigate('/account/login')}>Login</Button>
    </Typography>
  </div>
    
  );
}

export default RegisterForm;
/*<div>
      <Typography variant='h5' className='text-center'>Register</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
              value={values.fullName}
              onChange={handleChange}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" error={Boolean(errors.role)}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                value={values.role}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value={'ROLE_CUSTOMER'}>Customer</MenuItem>
                <MenuItem value={'ROLE_RESTAURANT_OWNER'}>Restaurant Owner</MenuItem>
                <MenuItem value={'ROLE_ADMIN'}>Admin</MenuItem>
              </Select>
              {errors.role && <Typography variant="body2" color="error">{errors.role}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={values.password}
              onChange={handleChange}
             error={Boolean(errors.password)}
             helperText={errors.password}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button sx={{ marginTop: 2, padding: '1rem' }} fullWidth type='submit' variant='contained'>Register</Button>
      </form>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Already have an account?
        <Button size='small' onClick={() => navigate('/account/login')}>Login</Button>
      </Typography>
    </div>*/
