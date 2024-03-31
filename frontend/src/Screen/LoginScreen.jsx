import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Paper,
  FormControl,
  InputLabel,
  TextField,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import {logout} from '../slices/authSlice'
import { useNavigate, Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
// redux toolkit functionalities
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  //   useLoginMutation is a custom hook provided by RTK Query that is generated based on the usersApiSlice defined in this project.
  // The useLoginMutation hook encapsulates logic related to making API requests for user login functionality. It handles sending a login request to the server and manages the loading state (isLoading) during the request.
  // By using array destructuring, const [ login, {isLoading }] extracts the login function and isLoading boolean from the return value of useLoginMutation.
  // login is the function you'll call to initiate the login process, typically triggered when the user submits the login form.
  // isLoading is a boolean value that indicates whether the login request is currently in progress. This can be used to show loading spinners or disable the submit button while the request is ongoing.

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email+password)
    try {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/')
    } catch (err) {
        toast.error(err?.data?.message || err.error);
    }
};
  return (
    <Paper
      elevation={3}
      sx={{ width: "40%", margin: "20px auto", padding: "20px" }}
    >
      <form onSubmit={submitHandler}>
        <FormControl fullWidth>
          <Stack gap="8px" width="100%">
            <Typography variant="h4" textAlign="center">
              Sign in{" "}
            </Typography>
            <TextField
              size="small"
              id="outlined-basic"
              label="Email"
              value={email}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="outlined"
              size="small"
              sx={{ width: "10rem", margin: "auto" }}
            >
              Sign in
            </Button>
            <Box display="flex" justifyContent="center">
              <Typography>Haven't got an account ??</Typography>
              <Link
                onClick={() => navigate("/register")}
                component="button"
                variant="body1"
                underline="none"
                sx={{ marginLeft: "8px" }}
              >
                Sign Up{" "}
              </Link>
            </Box>
          </Stack>
        </FormControl>
      </form>
    </Paper>
  );
}

export default LoginScreen;
