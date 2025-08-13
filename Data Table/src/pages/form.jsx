import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../auth/studentSlice";
import { useNavigate } from "react-router-dom";

function Form() {
const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !course) return;
    dispatch(addStudent({ id: Date.now(), name, age, course }));
    setName("");
    setAge("");
    setCourse("");
    navigate("/students");
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Age" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Course" 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form