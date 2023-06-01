import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import { HomeScreen } from './screens/HomeScreen.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={true} path='/' element={ <HomeScreen /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
