import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../public/images/more/logo1.png'

const Contract = () => {
    return (
        <>
         <div className="bg-[url('/bg-pattern.png')] bg-cover bg-no-repeat p-10 text-[#331A15] font-sans">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          <img src={logo} alt="Espresso Emporium" className="w-16 h-16" />
          <h2 className="text-2xl font-bold">Espresso Emporium</h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-4 text-2xl mt-3">
            <FaFacebook className="hover:text-[#D2B48C]" />
            <FaTwitter className="hover:text-[#D2B48C]" />
            <FaInstagram className="hover:text-[#D2B48C]" />
            <FaLinkedin className="hover:text-[#D2B48C]" />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <p className="flex items-center gap-2"><FaPhone /> +88 01533 333 333</p>
              <p className="flex items-center gap-2"><FaEnvelope /> info@gmail.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="input  bg-white input-bordered w-full" />
            <input type="email" placeholder="Email" className="input bg-white input-bordered w-full" />
            <textarea placeholder="Message" className="textarea textarea-bordered bg-white w-full h-32" />
            <button className="btn bg-white rounded-3xl border border-[#331A15] text-[#331A15] hover:bg-[#D2B48C]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
            
        </>
    );
};

export default Contract;