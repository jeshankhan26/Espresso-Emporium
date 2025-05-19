import React from 'react';
import logo from '../../../public/images/more/logo1.png'

const Navbar = () => {
    return (
        <>
        <div
  className="flex justify-center items-center p-4 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/more/24.jpg')" }}
>
  <img
    src={logo}
    alt="Logo"
    className="w-10 md:w-12 lg:w-16 mr-3"
  />
  <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-semibold">
    Espresso Emporium
  </h1>
</div>

            
        </>
    );
};

export default Navbar;