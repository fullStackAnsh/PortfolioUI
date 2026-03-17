import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../components/SideBar";
import MobileViewSidebar from "../components/MobileViewSidebar";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-screen flex">

      {isOpen && <MobileViewSidebar state={isOpen} method={setIsOpen} />}

      <SideBar />

      {/* Dynamic page content */}
      <div className="flex-1">
        <Outlet />
      </div>

      <div
  className="fixed bottom-5 right-3 lg:hidden
             h-14 w-14
             rounded-full
             bg-neutral-100
             shadow-lg
             flex items-center justify-center
             cursor-pointer hover:bg-neutral-300 transition"
  onClick={() => setIsOpen(!isOpen)}
>
  {/* Hamburger Icon */}
  <div className="flex flex-col gap-1">
    <span className="block w-6 h-0.5 bg-neutral-500"></span>
    <span className="block w-6 h-0.5 bg-neutral-500"></span>
    <span className="block w-6 h-0.5 bg-neutral-500"></span>
  </div>
</div>

    </div>
  );
}

export default AppLayout;