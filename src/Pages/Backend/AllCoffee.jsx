// import { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router'; // ✅ Correct import
// import { AuthContext } from '../../Provider/AuthContext';
import { FaEye } from "react-icons/fa";
import { IoPencilOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const AllCoffee = () => {
  const data = useLoaderData(); // All coffee data
  console.log(data.id)
  // const {user}=useContext(AuthContext);

  // const matchedUser = data.filter(item => item.username === user.displayName);
  // console.log(matchedUser)
  const handleDelete = (id) => {

        console.log(id);
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
        if (result.isConfirmed) {
            // Start Deleting the coffee
            fetch(`https://coffee-server-mu-seven.vercel.app/Coffee/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    Swal.fire(
                        'Deleted!',
                        'Coffee Data Has been deleted.',
                        'success'
                    ).then(() => {
                        // Reload the page or update the UI as needed
                        window.location.reload();
                    });
                    
                }
            })
           
        }
        })}

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl text-black font-bold mb-4">My Coffee Collection</h2>

      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table head */}
            <thead>
              <tr className='text-black'>
                <th>Coffee Name</th>
                <th>Chef</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id || index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.photo}
                            alt={item.coffeeName }
                          />
                        </div>
                      </div>
                       <div className="font-bold">{item.coffeeName || "Unknown Name"}</div>
                    </div>
                  </td>
                  <td>
                    {item.chef || "Unknown Brand"}
                  </td>
                  <td>{item.category || "N/A"}</td>
                  <th>
                   <div className='flex gap-3 p-2'>
                                <NavLink to={`coffeedetails/${item._id}`} className='bg-[#3C393B] p-2 text-white'>
                                    <FaEye/>
                                </NavLink>
                                <NavLink to={`coffeedit/${item._id}`} className='bg-[#3C393B] p-2 text-white'>
                                     <IoPencilOutline />
                                </NavLink>
                                <button onClick={()=>handleDelete(item._id)} className='bg-[#EA4744] p-2 text-white'>
                                   <FaTrash />
                                </button>
                               
                               
                                
                            </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No matched coffee data found for your user.</p>
      )}
    </div>
  );
};

export default AllCoffee;
