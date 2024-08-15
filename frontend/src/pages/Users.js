import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectUser, setSelectUser] = useState("");
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((Response) => {
        setUsers(Response?.data);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  const addUser = (data) => {
    setSubmited(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/adduser", payload)
      .then(() => {
        getUsers();
        setSubmited(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  const updateUser = (data) => {
    setSubmited(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/updateuser", payload)
      .then(() => {
        getUsers();
        setSubmited(false);
        isEdit(false);
        getUsers();
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  const deleteUser = (data) => {
    Axios.post("http://localhost:3001/api/deleteuser", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  return (
    <Box
      sx={{ width: "salc(100% - 100%)", margin: "auto", marginTop: "100px" }}
    >
      <UserForm
        addUser={addUser}
        submited={submited}
        data={selectUser}
        isEdit={isEdit}
        updateUser={updateUser}
      />
      <UsersTable
        rows={users}
        selectUser={(data) => {
          setSelectUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you sure?") && deleteUser(data)
        }
      />
    </Box>
  );
}

export default Users;
