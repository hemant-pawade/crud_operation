import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { SlPeople } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const Read = () => {
  const [data, setData] = useState([]);
  const getCustomersData = () => {
    axios
      .get("https://63ce853d6d27349c2b6fdd56.mockapi.io/crud_api")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://63ce853d6d27349c2b6fdd56.mockapi.io/crud_api/${id}`)
      .then((res) => {
        getCustomersData();

        console.log(res);
        console.log(res.data);
      });
  };

  const setToLocal = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);

    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getCustomersData();
  }, []);

  return (
    <>
        <h1>
          <span className="mx-4 text-secondary">People List</span>
          <Badge bg="secondary">
            <SlPeople />
          </Badge>
        </h1>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {data.map((data, index) => (
          <tbody>
            <tr>
              <td>{data.id }</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Link to="/update">
                  <Button
                    className="btn-success"
                    onClick={() => setToLocal(data.id, data.name, data.email)}
                  >
                    <TiEdit />
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  className="btn-danger"
                  onClick={() => handleDelete(data.id)}
                >
                  <MdDeleteForever />
                </Button>
              </td>
            </tr>
          </tbody>
        ))}


      </Table>

     <Link to="/crud_operation"> <Button className="px-5 py-3 my-5  btn-secondary"><BiArrowBack/></Button></Link>
    </>
  );
};

export default Read;
