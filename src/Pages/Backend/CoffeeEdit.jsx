import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from "sweetalert2";

const CoffeeEdit = () => {
    const coffee = useLoaderData();
  console.log(coffee);

  const updateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeForm = Object.fromEntries(formData.entries());

    // Convert price to float
    if (coffeeForm.price) {
      coffeeForm.price = parseFloat(coffeeForm.price);
    }

    fetch(`https://coffee-server-mu-seven.vercel.app/addCoffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Update Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Redirect to the home page or any other page ;
            window.location.href = "/dashboard/allcoffee";
          });
          form.reset(); // Reset the form after successful submission
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add coffee.",
            icon: "error",
          });
        }
      });
  };
    return (
        <>
            <div className="my-5 lg:mx-80 mx-5">

      <div className="bg-[#F4F3F0] p-10 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Update Coffee
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8">
          Fill out the form below to update your coffee details.
        </p>

        <form onSubmit={updateCoffee}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="coffeeName">Name</label>
              <input
                type="text"
                name="coffeeName"
                id="coffeeName"
                defaultValue={coffee.coffeeName}
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee name"
                required
              />
            </div>
            <div>
              <label htmlFor="chef">Chef</label>
              <input
                type="text"
                name="chef"
                id="chef"
                defaultValue={coffee.chef}
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee chef"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <label htmlFor="supplier">Supplier</label>
              <input
                type="text"
                name="supplier"
                id="supplier"
                defaultValue={coffee.supplier}
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee supplier"
                required
              />
            </div>
            <div>
              <label htmlFor="taste">Taste</label>
              <input
                type="text"
                name="taste"
                id="taste"
                defaultValue={coffee.taste}
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee taste"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                defaultValue={coffee.category}
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee category"
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="details"
                id="price"
                defaultValue={coffee.details}
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee price"
                required
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              name="photo"
              id="photo"
              defaultValue={coffee.photo}
              className="border rounded-lg w-full p-2"
              placeholder="Enter photo URL"
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-[#D2B48C] hover:bg-[#c39d76] text-white font-bold py-2 px-6 rounded-lg"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    );
};

export default CoffeeEdit;