import { useState } from 'react';
import AppNavbar from './components/AppNavbar';
import BreadcrumbNav from './components/BreadcrumbNav';
import PageHeader from './components/PageHeader';
import StudentList from './components/StudentList';
import PaginationBar from './components/PaginationBar';
import AlertMessage from './components/AlertMessage';
import Footer from './components/Footer';
import initialStudents from './data/students';

const STUDENTS_PER_PAGE = 4;

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [alert, setAlert] = useState({
    message: 'Student records have been successfully updated.',
    variant: 'info',
  });

  const showAlert = (message, variant = 'info') => setAlert({ message, variant });

  // Search filter
  const filteredStudents = students.filter((s) =>
    `${s.name} ${s.major} ${s.id}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / STUDENTS_PER_PAGE));
  const page = Math.min(currentPage, totalPages);
  const visibleStudents = filteredStudents.slice(
    (page - 1) * STUDENTS_PER_PAGE,
    page * STUDENTS_PER_PAGE
  );

  const handleViewProfile = (id) => {
    const student = students.find((s) => s.id === id);
    setStudents(students.map((s) => (s.id === id ? { ...s, views: s.views + 1 } : s)));
    showAlert(`Viewing profile of ${student.name} (${student.views + 1} views).`, 'primary');
  };

  const handleDelete = (id) => {
    const student = students.find((s) => s.id === id);
    if (!window.confirm(`Delete ${student.name}?`)) return;
    setStudents(students.filter((s) => s.id !== id));
    showAlert(`${student.name} has been deleted.`, 'danger');
  };

  const handleAdd = () => {
    const nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 101;
    const newStudent = {
      id: nextId,
      name: `New Student ${nextId}`,
      major: 'Computer Science',
      year: 1,
      gpa: 3.0,
      email: `student${nextId}@studentportal.com`,
      phone: `+1 555 0${nextId}`,
      views: 0,
    };
    setStudents([...students, newStudent]);
    setSearchTerm('');
    setCurrentPage(Math.ceil((students.length + 1) / STUDENTS_PER_PAGE));
    showAlert(`${newStudent.name} has been added successfully.`, 'success');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar
        brand="StudentPortal"
        links={['Dashboard', 'Students', 'Courses', 'Reports']}
        activeLink="Students"
        onSearch={handleSearch}
      />

      <main className="container flex-grow-1">
        <BreadcrumbNav items={['Home', 'Students', 'Directory']} />
        <PageHeader title="Student Directory" onAdd={handleAdd} />

        <StudentList
          students={visibleStudents}
          onViewProfile={handleViewProfile}
          onDelete={handleDelete}
        />

        <PaginationBar currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />

        <AlertMessage
          message={alert.message}
          variant={alert.variant}
          onClose={() => setAlert({ message: '', variant: 'info' })}
        />
      </main>

      <Footer
        links={['Home', 'Computer Science', 'Courses', 'Reports']}
        contact={{ phone: '+1 123 456 7890', email: 'info@studentportal.com' }}
      />
    </div>
  );
}

export default App;
