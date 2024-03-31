import React from 'react'
import { ThemeProvider} from '@mui/material'
import Theme from '../config/ThemeConfig.js';
import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer/>
      <Navbar/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App
