import React, { useState, useEffect } from 'react'
import { Box, Stack, Paper, FormControl, Button, TextField, Typography, Link } from '@mui/material'
import PasswordInput from '../components/PasswordInput'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


import { useRegisterMutation } from '../slices/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../slices/authSlice'


function RegisterScreen() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register] = useRegisterMutation()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log('submit button clicked')
    if (password !== confirmPassword) {
      toast.error('password do not  match')
    } else {
      
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/')
        toast.success('user registered successfully')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }


  return (
    <Paper
      elevation={3}
      sx={{ width: "40%", margin: "20px auto", padding: "20px" }}
    >
      <form onSubmit={submitHandler}>
        <FormControl fullWidth>
          <Stack gap="8px" width="100%">
            <Typography variant="h4" textAlign="center">
              Sign Up{" "}
            </Typography>
            <TextField
              size="small"
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              size="small"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" variant="outlined" size="small" sx={{ width: '10rem', margin: 'auto' }}>
              Sign Up
            </Button>
            <Box display="flex" justifyContent='center'>
              <Typography>Already have an account ??</Typography>
              <Link onClick={() => navigate('/login')} component='button' variant="body1" underline="none" sx={{ marginLeft: '8px' }}>Sign in</Link>
            </Box>
          </Stack>
        </FormControl>
      </form>
    </Paper>
  )
}

export default RegisterScreen
