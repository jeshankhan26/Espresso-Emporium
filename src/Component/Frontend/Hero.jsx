import React from 'react';

const Hero = () => {
    return (
        <>
     <div
  style={{
    backgroundImage: "url('/images/more/3.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  className="w-full min-h-screen flex items-center justify-center pl-4 md:pl-60 pt-32 md:pt-0"
>
  <div className="text-white max-w-md ">
    <h1 className="text-2xl md:text-4xl font-bold mb-4">
      Would you like a <span className="italic font-serif">Cup of Delicious Coffee?</span>
    </h1>
    <p className="mb-6 text-sm md:text-base leading-relaxed">
      It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!<br />
      Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
    </p>
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-5 rounded shadow">
      Learn More
    </button>
  </div>
</div>


            
        </>
    );
};

export default Hero;