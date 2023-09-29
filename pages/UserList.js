// components/UserList.js
import { useEffect, useState } from "react";
import axios from "axios";
import { 
    UserListContainer,
    Table,
    TableHeader,
    TableRow,
    TableCell
 } from "../UserListStyles";
export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define the URL
    const apiURL = "http://127.0.0.1:8000/api/users";

    // Fetch user data from the API
    axios
      .get(apiURL)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching member data: ", error);
      });
  }, []);

  return (
    <UserListContainer>
      <h1>User Details</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>#</TableHeader>
            <TableHeader>Member Number</TableHeader>
            <TableHeader>User Name</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.member_number}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email ?? 'N/A'}</TableCell>
              <TableCell>{user.phone ?? 'N/A'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </UserListContainer>
  );
}
