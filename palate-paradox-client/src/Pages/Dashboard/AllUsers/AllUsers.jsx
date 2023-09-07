import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div className="w-3/4">
      <Helmet>
        <title>Palete Paradox | All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold">Total Users:{users.length}</h3>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>EMail</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index)=>  <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>Blue</td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllUsers;