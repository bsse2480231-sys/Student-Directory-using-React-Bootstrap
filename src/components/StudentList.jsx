import StudentCard from './StudentCard';

function StudentList({ students, onViewProfile, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        <h5>No students found.</h5>
        <p className="mb-0">Try a different search or add a new student.</p>
      </div>
    );
  }

  return (
    <div className="row g-3 justify-content-center">
      {students.map((student) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={student.id}>
          <StudentCard student={student} onViewProfile={onViewProfile} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
