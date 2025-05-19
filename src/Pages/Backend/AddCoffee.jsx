import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";

// Example: AuthContext provides user info


const AddCoffee = () => {
  const { user } = useContext(AuthContext); // get logged-in user info
  // const data = useLoaderData();

  // Find current user data
  // const matchedUser = data.find(item => item.email === user?.email);

const handleAddCoffee = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const coffeeForm = Object.fromEntries(formData.entries());
  console.log("Sending data:", coffeeForm);

  fetch("https://coffee-server-mu-seven.vercel.app/addcoffee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(coffeeForm),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Server Response:", data);
      if (data.insertedId || data.acknowledged) {
        Swal.fire({
          title: "Coffee Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location = "allcoffee"; // ✅ Correct usage
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add coffee.",
          icon: "error",
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Try again.",
        icon: "error",
      });
    });
};


  return (
    <div className="my-5 lg:mx-80 mx-5">
      <div className="bg-[#F4F3F0] p-10 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Add New Coffee
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8">
          Fill out the form below to add a new coffee to your collection.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="coffeeName">Name</label>
              <input
                type="text"
                name="coffeeName"
                id="coffeeName"
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
                className="border rounded-lg w-full p-2"
                placeholder="Enter coffee category"
                required
              />
              <input
                type="hidden"
                name="username"
                value={user.displayName}
              />
            </div>
            <div>
              <label htmlFor="details">Price</label>
              <input
                type="text"
                name="details"
                id="details"
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
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
