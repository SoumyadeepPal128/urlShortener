import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "../src/store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import AddUrl from './pages/AddUrl.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Account from './pages/Account.jsx'
import About from './pages/About.jsx'
import Urls from './pages/Urls.jsx'
import RedirectUrl from './pages/RedirectUrl.jsx'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/add-url",
        element:<AddUrl/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/my-urls",
        element:<Urls/>
      },
      {
        path:"/:code",
        element:<RedirectUrl/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
