import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchname, setSearchname] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const fetchUserdetail = async () => {
    try {
      const res = await fetch('http://localhost:3000/userdata');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserdetail();
  }, []);

  const adduser = () => {
    navigate('/adduser');
  };

  const DeleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/userdata/${id}`, {
        method: 'DELETE',
      });
      fetchUserdetail();
    } catch (error) {
      console.log(error);
    }
  };
  const searchAndFilter = users.filter((user) => {
    const matchesName = searchname === '' || user.username.toLowerCase().includes(searchname.toLowerCase());
    const matchesCity = selectedCity === '' || user.city.toLowerCase() === selectedCity.toLowerCase();
    return matchesName && matchesCity;
  });

  return (
    <>
      <div className='container my-3 d-flex justify-content-between align-items-center'>
      
        <input
          type="text"
          className='form-control w-25'
          placeholder="Search by name"
          value={searchname}
          onChange={(e) => setSearchname(e.target.value)}
        />

        <select
          className="form-select w-25 ms-3 fw-bold"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Apply FIlter </option>
          <option value="Surat">Surat</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Ahemdabad">Ahemdabad</option>
        </select>
      </div>

      <div className='d-flex justify-content-between container border p-1 my-4'>
        <p className='fs-5 fw-bold text-success text-uppercase pt-3'>Users Details</p>
        <Button onClick={adduser} variant="outline-warning" className='fw-bold'>Add New User</Button>
      </div>

      <Table striped bordered hover className='container text-center'>
        <thead>
          <tr>
            <th>User Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchAndFilter.length > 0 ? (
            searchAndFilter.map((ele) => (
              <tr key={ele.id}>
                <td>
                  <div className='d-flex flex-wrap justify-content-center w-100'>
                    <div className='w-50 text-end'>
                      <img src={ele.image} alt="" className='rounded-circle me-2' width={32} height={32} />
                    </div>
                    <div className='w-50 text-start'>
                      {ele.username}
                    </div>
                  </div>
                </td>
                <td>{ele.dob}</td>
                <td>{ele.email}</td>
                <td>{ele.phoneno}</td>
                <td>{ele.city}</td>
                <td className='d-flex justify-content-center'>
                  <Button variant="outline-success px-3 me-3" onClick={() => navigate(`/edituser/${ele.id}`)}>Edit</Button>
                  <Button variant="outline-danger" onClick={() => DeleteUser(ele.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className='text-danger'>No users found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
