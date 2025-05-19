import { signOut } from 'firebase/auth';
import Swal from "sweetalert2";
import { NavLink, Outlet } from 'react-router';
import { auth } from '../../Firebase/Firebase.init';

const Sidebar = () => {
     const handleLogout = () => {
        signOut(auth)
          .then(() => {
            console.log("User signed out successfully");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Logout Successful",
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              window.location.href = '/login';
            });
          })
          .catch((error) => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Logout Failed",
              showConfirmButton: false,
              timer: 1500
            });
            console.error("Error signing out:", error);
          });
      };
    return (
        <>
        <div className="drawer lg:drawer-open">
      {/* Toggle Button for Mobile */}
      <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />
      
      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        <label htmlFor="sidebar-toggle" className="btn btn-primary drawer-button lg:hidden m-4">
          ☰
        </label>
        <Outlet></Outlet>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="sidebar-toggle" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-[#ECEAE3] text-[#331A15]">
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="addcoffees">Add Coffee</NavLink></li>
          <li><NavLink to="allcoffee">All Coffee</NavLink></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </div>
            
        </>
    );
};

export default Sidebar;