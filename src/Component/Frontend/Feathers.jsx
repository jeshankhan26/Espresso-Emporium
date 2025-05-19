import React from 'react';
import icon1 from '../../../public/images/icons/1.png';
import icon2 from '../../../public/images/icons/2.png';
import icon3 from '../../../public/images/icons/3.png';
import icon4 from '../../../public/images/icons/4.png';


const Feathers = () => {
    return (
        <>
       <div className="bg-[#ECEAE3] py-10 px-5">
  <div className="grid grid-cols-1 md:px-40 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
    <div>
      <img src={icon1} alt="Awesome Aroma" className="mb-4" />
      <h1 className="text-xl font-semibold mb-2">Awesome Aroma</h1>
      <p>You will definitely be a fan of the design & aroma of your coffee</p>
    </div>
    <div>
      <img src={icon2} alt="High Quality" className=" mb-4" />
      <h1 className="text-xl font-semibold mb-2">High Quality</h1>
      <p>We served the coffee to you maintaining the best quality</p>
    </div>
    <div>
      <img src={icon3} alt="Pure Grades" className=" mb-4" />
      <h1 className="text-xl font-semibold mb-2">Pure Grades</h1>
      <p>The coffee is made of the green coffee beans which you will love</p>
    </div>
    <div>
      <img src={icon4} alt="Proper Roasting" className=" mb-4" />
      <h1 className="text-xl font-semibold mb-2">Proper Roasting</h1>
      <p>Your coffee is brewed by first roasting the green coffee beans</p>
    </div>
  </div>
</div>

            
        </>
    );
};

export default Feathers;