import { useSelector } from "react-redux";
const Students = () => {
    const students = useSelector((state) => state.students.list);

  return (
    <div className="students-container">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <h3>{student.name}</h3>
              <p>Age: {student.age}</p>
              <p>Course: {student.course}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default Students