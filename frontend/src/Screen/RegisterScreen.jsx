import React from 'react'
import { Box, Stack, Paper, FormControl, Button, TextField, Typography, Link } from '@mui/material'
import PasswordInput from '../components/PasswordInput'
import { useNavigate } from 'react-router-dom'


function RegisterScreen() {
  const navigate = useNavigate()
  return (
    <Paper
    elevation={3}
    sx={{ width: "70%", margin: "20px auto", padding: "20px" }}
  >
    <FormControl fullWidth>
      <Stack gap="8px" width="100%">
        <Typography variant="h4" textAlign="center">
          Sign Up{" "}
        </Typography>
        <TextField
          size="small"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <PasswordInput />
        <Button type="submit" variant="outlined" size="small" sx={{width:'10rem', margin:'auto'}}>
          Sign Up
        </Button>
        <Box display="flex" justifyContent='center'>
          <Typography>Already have an account ??</Typography>
            <Link onClick={()=> navigate('/login')} component='button'  variant="body1" underline="none" sx={{marginLeft:'8px'}}>Sign in</Link>
        </Box>
      </Stack>
    </FormControl>
  </Paper>
  )
}

export default RegisterScreen
