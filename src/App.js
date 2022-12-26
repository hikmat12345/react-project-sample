//libs
import React, { Suspense, useEffect, lazy, useState } from "react";
import {   BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { TPGuardedRoute } from "./components/TPGuardedRoute/TPGuardedRoute";
import { TPLoading } from "./components/TPLoading/TPLoading";
import { getCookies, getFileSrcFromPublicFolder } from "./utils";
import GridSamplePage from"./Pages/GridSamplePage/GridSamplePage"
import NotFound from "./NotFound/NotFound";
  
  
const App = () => {
  
  const userSignedInStatus =    getCookies("userId") !== undefined ? true : false;
 
  useEffect(() => {
    if (userSignedInStatus) {
      if(window.initScript) {
        window.initScript(getCookies("customer_details"));
      }
    } 
  }, []);
 
  return ( 
      <Router>
            <Suspense
              fallback={
                <TPLoading
                  loaderImage={getFileSrcFromPublicFolder("loader.svg")}
                  type="svg"
                />
              }
            >  
             <Routes>
                {/* <TPGuardedRoute
                  path="/"
                  element={<GridSamplePage />}
                  exact
                  auth={true}
                /> */}
              <Route path="/" element={<GridSamplePage />} />
              <Route path="*" element={<NotFound />} exact auth={true} />
            </Routes>
        </Suspense>
    </Router> 
    
  );
}

export default App;
