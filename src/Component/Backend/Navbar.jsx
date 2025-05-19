import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  // const data = useLoaderData();

  // Find current user data
  // const matchedUser = data.find(item => item.email === user?.email);

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
    <div className="navbar px-10 shadow-sm">
      <div className="flex-1">
        <a className="text-xl text-[#331A15] font-extrabold">Espresso Emporium</a>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input bg-white border-blue-600 input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              />
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-white">
            <li>
              <span>{user?.displayName || "No Name Found"}</span>
            </li>
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
