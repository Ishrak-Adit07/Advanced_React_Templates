/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <main className="pt-16 items-center text-center w-full h-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
