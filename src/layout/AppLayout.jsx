import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../components/SideBar";
import MobileViewSidebar from "../components/MobileViewSidebar";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-screen flex">

      {isOpen && <MobileViewSidebar />}

      <SideBar />

      {/* Dynamic page content */}
      <div className="flex-1">
        <Outlet />
      </div>

      <div
        className="bg-blue-600 fixed h-15 w-15 rounded-full bottom-5 right-3 lg:hidden text-center py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        Button
      </div>

    </div>
  );
}

export default AppLayout;