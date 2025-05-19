import React from 'react';
import img1 from '../../../public/images/cups/Rectangle 10.png';
import img2 from '../../../public/images/cups/Rectangle 11.png';
import img3 from '../../../public/images/cups/Rectangle 12.png';
import img4 from '../../../public/images/cups/Rectangle 13.png';
import img5 from '../../../public/images/cups/Rectangle 14.png';
import img6 from '../../../public/images/cups/Rectangle 15.png';
import img7 from '../../../public/images/cups/Rectangle 16.png';
import img8 from '../../../public/images/cups/Rectangle 9.png';

const Images = () => {
    return (
       <>
       <div className='mb-3'>
  <div className='text-center '>
    <h1 className='text-2xl font-bold'>Follow us</h1>
    <p className='text-4xl mb-10'>Follow on Instagram</p>
  </div>

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-100 px-0'>
    <img src={img1} alt="Instagram post 1" className='w-full h-auto rounded' />
    <img src={img2} alt="Instagram post 2" className='w-full h-auto rounded' />
    <img src={img3} alt="Instagram post 3" className='w-full h-auto rounded' />
    <img src={img4} alt="Instagram post 4" className='w-full h-auto rounded' />
    <img src={img5} alt="Instagram post 5" className='w-full h-auto rounded' />
    <img src={img6} alt="Instagram post 6" className='w-full h-auto rounded' />
    <img src={img7} alt="Instagram post 7" className='w-full h-auto rounded' />
    <img src={img8} alt="Instagram post 8" className='w-full h-auto rounded' />
  </div>
</div>

       </>
    );
};

export default Images;