import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './components/styles/global.scss';
import Layout from './layout.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../i18n.ts';

import smoothscroll from 'smoothscroll-polyfill';
import { AppContextProvider } from './components/context/app.context.tsx';

// Kick off the polyfill
smoothscroll.polyfill();

// Lấy theme từ localStorage hoặc mặc định là "light"
const savedTheme = localStorage.getItem("theme") || "dark";
// Gán theme ngay từ đầu cho <html>
document.documentElement.setAttribute("data-bs-theme", savedTheme);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
)
