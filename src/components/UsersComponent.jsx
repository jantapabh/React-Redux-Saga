import React, { useEffect } from "react";
import Card from "./CardComponent";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";

const Users = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "jan",
          company: {
            name: "Shop stack",
            catchPhrase: "Multi-layer",
          },
        },
      ])
    );
  }, []);

  return (
    <>
    { users.length && users.map((user) => {
           <Card user={user} key={user.id} /> 
    })}
    {users.length === 0 && <p>No Users</p>}
    </>
  );
};

export default Users;
