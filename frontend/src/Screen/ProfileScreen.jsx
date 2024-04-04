import React, { useState, useEffect } from 'react'
import { Box, Stack, Paper, FormControl, Button, TextField, Typography, Link } from '@mui/material'
import PasswordInput from '../components/PasswordInput'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../slices/authSlice'

import { useUpdateMutation } from '../slices/usersApiSlice'


function ProfileScreen() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)
  const [update] = useUpdateMutation()

  useEffect(() => {
   setName(userInfo.name)
   setEmail(userInfo.email)
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('password do not  match')
    } else {
      try{
        const res = await update({
          _id: userInfo._id,
          name,
          email,
          password
        }).unwrap()
        dispatch(setCredentials({...res}))
        navigate('/')
          toast.success('user updated successfully')
        }catch(err){
          toast.error(err?.data?.message || err.error)
        }
    }
  }
  // Inside the submitHandler, you call the update function with the data you want to update (such as _id, name, email, password). You await the result of this function call, and upon success, you dispatch an action to update the Redux store with the new user information retrieved from the API response. If there's an error, you handle it accordingly 
  return (
    <Paper
      elevation={3}            

      sx={{ width: "40%", margin: "20px auto", padding: "20px" }}
    >
      <form onSubmit={submitHandler}>
        <FormControl fullWidth>
          <Stack gap="8px" width="100%">
            <Typography variant="h4" textAlign="center">
              Update profile{" "}
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
              Update
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Paper>
  )
}

export default ProfileScreen;
