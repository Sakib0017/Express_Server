import React, { useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
    const [users, setUsers] = useState([{
        Name: "AB", Email: "ab@gmail.com", Description: "If the dev script is missing or not defined correctly, add or update it according to your project setup. Here are some common setups:"
    }]);
    return (
        <>
         <div>
         <Link to="create" className='btn btn-success fixed   top-[150px]'>Add+</Link>
            <div className="mx-auto flex flex-row bg-gray-100 rounded  fixed   top-[200px] ">
               
                <table>
                    <thead>
                        <tr className="p-5  border-1">
                            <th className="p-2  border-1">Name</th>
                            <th className="p-2  border-1">Email</th>
                            <th className="p-2  border-1">Description</th>
                            <th className="p-2  border-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                               return  <tr className="p-5  border-1">
                                    <td className="p-2 border-1">{user.Name}</td>
                                    <td className="p-2 border-1">{user.Email}</td>
                                    <td className="p-2 border-1">{user.Description}</td>
                                    <td className="p-2 border-1"><button className="mr-2 border-1">Edit</button ><button className="border-1">Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         </div>
        </>
    )
}

export default Users;