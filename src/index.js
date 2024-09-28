import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import 'bootstrap/dist/css/bootstrap.css'
 import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from './components/SideBar';
// import  'react-bootstrap-sidebar-menu/dist/sidebar-menu.scss'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import TimeSheets from './components/TimeSheets';
import Claims from './components/Claims';
import Projects from './components/Projects';
import TaxInfo from './components/TaxInfo';
import Dashboard from './components/Dashboard';
import PayPage from './components/timeSheetComponents/PayPage';
import CertificationsPage from './components/timeSheetComponents/CertificationsPage';
import ObjectivesPage from './components/timeSheetComponents/ObjectivesPage';
import AttendancePage from './components/timeSheetComponents/AttendancePage';
import LeavePage from './components/timeSheetComponents/LeavePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: ( <App></App>),
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path:"/timesheets",
    element:<TimeSheets></TimeSheets>
  },
  {
    path:"/claims",
    element:<Claims></Claims>
  },
  {
    path:"/projects",
    element:<Projects></Projects>
  },
  {
    path:"/taxinfo",
    element:<TaxInfo></TaxInfo>
  },
  {
    path:'/paypage',
    element:<PayPage></PayPage>
  },
  {
    path:'/certificationspage',
    element:<CertificationsPage></CertificationsPage>
  },
  {
    path:'/objectivespage',
    element:<ObjectivesPage></ObjectivesPage>
    
  },
  {
    path:'/attendancepage',
    element:<AttendancePage></AttendancePage>
  },
  {
    path:'/leavepage',
    element:<LeavePage></LeavePage>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
