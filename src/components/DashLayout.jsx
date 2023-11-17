import { Outlet } from "react-router-dom";
// import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
import DashSideBar from "./DashSideBar";


const DashLayout = () => {
  return (
    <>
      {/* <DashHeader /> */}
      <DashSideBar />
      <div>
        <Outlet />
      </div>
      <DashFooter />
    </>
  )
}

export default DashLayout
