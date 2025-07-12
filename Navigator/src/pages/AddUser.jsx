import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';

const AddUser = () => {

  const navigate = useNavigate()

  const [addUser, setAddUser] = useState({
    username: "",
    dob: "",
    email: "",
    phoneno: "",
    city: "",
    image: ""
  })
  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddUser({ ...addUser, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3000/userdata", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addUser)
    })
    navigate('/')
  }
  return (
    <>
      <Form onSubmit={handlesubmit} className='w-50 mx-auto'>
        <Button className='bg-transparent text-dark border fw-bold my-5 w-100 mx-auto'>Fill The Details To Add New User </Button>
        <div className='d-flex justify-content-between gap-2'>
          <div className='w-100'>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Username"  onChange={(e) => setAddUser({...addUser , username:e.target.value})} />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setAddUser({...addUser , email:e.target.value})}/>
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Date of Birth</Form.Label>
              <Form.Control type="Date" placeholder="Enter Your Username" onChange={(e) => setAddUser({...addUser , dob:e.target.value})}/>
            </Form.Group>
          </div>
          <div className='w-100'>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Phone No.</Form.Label>
              <Form.Control type="tel" placeholder="+91 00000 00000" onChange={(e) => setAddUser({...addUser , phoneno:e.target.value})}/>
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>City</Form.Label>
              <Form.Control type="text" placeholder="Enter Your City"  onChange={(e) => setAddUser({...addUser , city:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Image </Form.Label>
              <Form.Control type="file" onChange={handleimage} />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className='text-center'>
          <Button variant="primary" type="submit" className='w-50'>
            Submit
          </Button>
        </div>
      </Form>

    </>

  )
}

export default AddUser