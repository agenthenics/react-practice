import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseState from './UseState';
import Data from "./Data";
import Form from "./Form/Form"
import UseEffect from './UseEffect/UseEffect';
import Fetch from "./UseEffect/Fetch";
import reportWebVitals from './reportWebVitals';
import { Multiple } from './Multiple/Multiple';
import Memory from './Memory/Memory';
import CustomHook from './CustomHook/CustomHook';
import CallUsers from './CallUsers';
import UseLayoutEffect from './UseLayoutEffect/UseLayoutEffect';
import UseTransition from './UseTransition/UseTransition';
import RoutesExample from './RoutesExample';
import UsersData from './Axios/UsersData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <Data /> */}
    {/* <Form /> */}
    {/* <UseEffect /> */}
    {/* <Fetch /> */}
    {/* <Multiple /> */}
    {/* <Memory/> */}
    {/* <CustomHook/> */}
    {/* <CallUsers/> */}
    {/* <UseLayoutEffect/> */}
    {/* <UseTransition/> */}
    {/* <RoutesExample/> */}
    <UsersData/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
