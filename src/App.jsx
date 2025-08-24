import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import CustomCursor from './components/CustomCursor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './components/Menu'
import About from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <CustomCursor />
          <Header />
        </>
      )
    },
    {
      path: '/Menu',
      element: <Menu />
    },
     {
      path: '/about',
      element: <About />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App

