import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

const CoffeeDetails = () => {
  const [coffee, setCoffee] = useState(null);
  const { id } = useParams();
  console.log(id);
  // Fetch coffee details using the id

  useEffect(() => {
    fetch(`https://coffee-server-mu-seven.vercel.app/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
      });
  }, [id]);
  return (
    <>
      <div className="my-5 lg:mx-80 mx-5">
        <NavLink
          to={'/'}
          className="btn bg-[#F4F3F0] border-none text-left mb-3 text-[#374151] font-semibold"
        >
          &larr; Back to home
        </NavLink>

        {coffee && (
          <div className="card w-full max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Coffee Image */}
              <figure className="w-full md:w-1/2">
                <img
                  src={coffee?.photo}
                  alt="Coffee"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </figure>

              {/* Coffee Details */}
              <div className="card-body w-full md:w-1/2 space-y-3">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Coffee Details
                </h1>
                <h2 className="text-xl">
                  <span className="font-semibold text-gray-700">Name:</span>{" "}
                  {coffee?.coffeeName}
                </h2>
                <p>
                  <span className="font-semibold text-gray-700">Chef:</span>{" "}
                  {coffee?.chef}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Supplier:</span>{" "}
                  {coffee?.supplier}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Taste:</span>{" "}
                  {coffee?.taste}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Category:</span>{" "}
                  {coffee?.category}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Price:</span>
                  {coffee?.details}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoffeeDetails;
