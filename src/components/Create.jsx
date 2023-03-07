import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { SiOpera } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    // axios.post("https://63ce853d6d27349c2b6fdd56.mockapi.io/crud_api", {
    //   name: name,
    //   email: email,
    //   header,
    // });

    axios({
      url: "https://63ce853d6d27349c2b6fdd56.mockapi.io/crud_api",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        name: name,
        email: email,
      },
    });
    navigate("/read");
  };

  return (
    <>
      <div className="d-flex justify-content-between " >
        <h1>
        <span className=" mx-4 text-secondary ">CRUD Operation</span> <Badge bg="secondary"><SiOpera/></Badge>
      </h1>  
     <Link to='/read'> <h1>
         <Badge bg="secondary text-info"><AiFillDatabase/></Badge>
      </h1>  </Link>
      

{/* <Button variant="primary" className="px-5 py-3 my-5" type="submit" onClick={handleSubmit}>
          Show Data
        </Button> */}
      </div>
      
      <Form>
        <Form.Group className="mb-3 " controlId="formBasicName">
        <strong>  <Form.Label >Name</Form.Label></strong>
          <Form.Control className="p-3"
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 "  controlId="formBasicEmail" >
         <strong> <Form.Label>Email address</Form.Label></strong>
          <Form.Control
          className="p-3"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="px-5 py-3 my-5" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Create;
