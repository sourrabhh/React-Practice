import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Home, Contact, User, Github } from './componenets/index.js'
import { GithubInfo } from './componenets/github/Github.jsx' //Github Loader 

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Layout />,

//       Children: [
//         {
//           path: "/",
//           element: <Home />
//         },
//         {
//           path: "/about",
//           element: <About />
//         },
//         {
//           path: "/contact",
//           element: <Contact />
//         }
//       ]
//   }
  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
        <Route path='' element = { <Home />} />
        <Route path='/about' element = { <About />} />
        <Route path='/contact' element = { <Contact />} />
        <Route path='/user/:userid' element = { <User />} />

        {/* Loader to optimize the Github API Call rather than useEffect() Hook*/}
        <Route 
          path='/github' 
          element= { <Github />}
          loader={GithubInfo} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
