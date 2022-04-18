import React, {useEffect} from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";
import Login from "./component/Login/Login";
import { Fragment } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        } else {
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        }
      });

      return () => {
        unsubscribe();
      }
  }, [])


  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />
              </Fragment>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
