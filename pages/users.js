// pages/users.js
import UserList from "./UserList";
import Layout from "./Layout";
import Sidebar from "./Sidebar";

import { UserListContainer } from "../UserListStyles";

export default function Users() {
  return (
    <UserListContainer>
      <Sidebar />
      <UserList />
    </UserListContainer>
  );
}
