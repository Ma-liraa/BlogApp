"use client";
import { useUsers } from "@/hooks/useUsers";
import Empty from "@/ui/Empty";
import UserRow from "./UserRow";
import Table from "@/ui/Table";

function UsersTable() {
  const { users, isLoading } = useUsers();

  if (users?.length) return <Empty resourceName="کاربری" />;
  console.log(users.users);

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عکس</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>تاریخ عضویت</th>
   
      </Table.Header>
      <Table.Body>
        {users?.users?.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default UsersTable;
