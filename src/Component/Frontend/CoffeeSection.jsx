import React from "react";
import { NavLink, useLoaderData } from "react-router";

const CoffeeSection = () => {
  const coffess = useLoaderData();

  return (
    <>
      <div className="md:mx-30 my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 mt-10">
          {coffess.map((coffee) => (
            <div
              key={coffee._id}
              className="card w-full bg-[#F5F4F1] shadow-xl"
            >
              <figure>
                <img src={coffee.photo} alt="Coffee" />
              </figure>
              <div className="card-body">
                <h2>
                  <span className="font-semibold">Name:</span>{" "}
                  {coffee.coffeeName}
                </h2>
                <p>
                  <span className="font-semibold">Chef:</span> {coffee.chef}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> {coffee.details}
                </p>
                <NavLink
                  to={`/coffeedetails/${coffee._id}`}
                  className="bg-[#D2B48C] p-2 text-white w-max rounded-md"
                >
                  View More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoffeeSection;
