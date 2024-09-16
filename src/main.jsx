import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CreatePost from './assets/CreatePost.jsx'
import PostComponent from './assets/PostComponent.jsx'
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {
        path: "/", element: <PostComponent />,
      }, {
        path: "/create-post", element: <CreatePost />,
      }
    ]
  },
  // {
  //   path: "/header", element: <Header />
  // }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
