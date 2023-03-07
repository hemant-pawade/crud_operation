import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GrUpdate ,GrDocumentUpdate } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

     
    }, []);

    const handleUpdate = (e)=> {
    e.preventDefault();
        
        axios({
            url: `https://63ce853d6d27349c2b6fdd56.mockapi.io/crud_api/${id}`,
            method: "PUT",
          
            data: {
              name: name,
              email: email,
            },
          });
          navigate("/read")

        }
    


  return (
    <>
        <h1>
        <span className=" mx-4 text-secondary ">Check & Update</span> <Badge bg="secondary"><GrDocumentUpdate/></Badge>
      </h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName" >
         <strong> <Form.Label>Name</Form.Label></strong>
          <Form.Control type="text" placeholder="Update Name"  value={name}  className="p-3" onChange={(e)=> setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <strong> <Form.Label>Email address</Form.Label></strong>
          <Form.Control type="email" placeholder="Enter email"  value={email} className="p-3" onChange={(e)=> setEmail(e.target.value) }/>
        </Form.Group>
        <Link to="/read"> <Button className="px-5 py-3 my-5  btn-secondary"><BiArrowBack/></Button></Link>
        <Button className="px-5 py-3 my-5 m-5" variant="success" type="submit" onClick={handleUpdate} >
         <GrUpdate/>
        </Button>
        
      </Form>
    </>
  );
};

export default Update;
