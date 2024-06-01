import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)


// 1. React
// 2. React Router
// 3. Tailwind Css
// 4. Daisy ui
// 5. React icon