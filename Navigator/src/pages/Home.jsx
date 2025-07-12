import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([])
  console.log("users", users);

  const fetchUserdetail = async () => {
    try {
      const res = await fetch('http://localhost:3000/userdata')
      const Data = await res.json()
      setUsers(Data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return () => fetchUserdetail()
  }, [])

  const navigate = useNavigate()

  const adduser = () => {
    navigate('/adduser')
  }

  const DeleteUser = async (id) => {
    const req = await fetch(`http://localhost:3000/userdata/${id}`, {
      method: "DELETE"
    }).then(() => {
      fetchUserdetail()
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className='d-flex justify-content-between container border p-1 my-4'>
        <p className='fs-5 fw-bold text-success text-uppercase pt-3'>Users Details</p>
        <Button onClick={adduser} variant="outline-warning" className='fw-bold'>Add New User</Button>
      </div>
      <Table striped bordered hover className='container text-center'>
        <thead>
          <tr>
            <th>User Name </th>
            <th>DOB</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((ele, index) => {
              return (
                <tr>
                  <td >
                    <div className='d-flex flex-wrap justify-content-center w-100'>
                      <div className='w-50 text-end'>
                        <img src={ele.image} alt="" className='rounded-circle me-2' width={32} height={32} />
                      </div>
                      <div className='w-50 text-start'>
                      {ele.username}
                      </div>
                    </div></td>
                  <td>{ele.dob}</td>
                  <td>{ele.email}</td>
                  <td>{ele.phoneno}</td>
                  <td>{ele.city}</td>
                  <td className='d-flex justify-content-center'>
                    <Button variant="outline-success px-3 me-3" onClick={() => navigate(`/edituser/${ele.id}`)}>Edit</Button>
                    <Button variant="outline-danger" onClick={() => DeleteUser(ele.id)}>Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

    </>
  )
}

export default Home;