import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Menu, Link } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../slices/authSlice'
import { useLogoutMutation } from '../slices/usersApiSlice'


export default function Navbar() {
  const { userInfo } = useSelector((state) => state.auth);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [logoutApiCall] = useLogoutMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    handleCloseNavMenu()
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" underline="none" color="inherit">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Mern Auth
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex-end", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/login" underline="none" color="inherit">
                    <Typography textAlign="center">Sign In</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Link href="/register" underline="none" color="inherit">
                    <Typography textAlign="center">Sign Out</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 5,
                px: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Link href="/login" underline="none" color="inherit">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register" underline="none" color="inherit">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ ml: 3, my: 2, color: "white", display: "block" }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {
                    userInfo?.name && (
                      <Button color="secondary" variant="contained">{userInfo?.name}</Button>
                    )
                  }
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "38px", padding: '20px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
