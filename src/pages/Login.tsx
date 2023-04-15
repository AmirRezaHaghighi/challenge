import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@mui/material/TextField'
import { Stack, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { saveData } from '../utils/localStorage'
import Alert from '@mui/material/Alert'
import { useMutation } from 'react-query'
import { userLogin } from '../hooks/useAxios'
import { LoadingButton } from '@mui/lab'

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const Login = () => {
  const navigate = useNavigate()
  const { mutate, isLoading } = useMutation(userLogin, {
    onSuccess: (data) => {
      saveData('token', data)
      ;<Alert severity='success'>you're login successfull</Alert>
      navigate('/users')
    },
    onError: () => {
      alert('there was an error')
    },
  })
  const formik = useFormik({
    initialValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  })

  return (
    <Box sx={{ width: '25%', mx: 'auto' }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4} sx={{ mx: 5, py: 5 }}>
          <TextField
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            id='password'
            name='password'
            label='Password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <LoadingButton variant='contained' loading={isLoading} type='submit'>
            Sign in
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  )
}

export default Login
