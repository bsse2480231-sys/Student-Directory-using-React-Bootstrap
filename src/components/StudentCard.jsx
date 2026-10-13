import { useState } from 'react';

function Avatar() {
  return (
    <div className="avatar-box d-flex align-items-end justify-content-center card-img-top">
      <svg width="90" height="110" viewBox="0 0 90 110" fill="#9a9ea3" aria-hidden="true">
        <circle cx="45" cy="38" r="24" />
        <path d="M5 110c0-26 18-44 40-44s40 18 40 44z" />
      </svg>
    </div>
  );
}

function StudentCard({ student, onViewProfile, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card h-100 shadow-sm student-card">
      <Avatar />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {student.name}
          {student.views > 0 && (
            <span className="badge text-bg-info" title="Profile views">
              {student.views} {student.views === 1 ? 'view' : 'views'}
            </span>
          )}
        </h5>
        <p className="card-text small mb-2">
          ID: {student.id}<br />
          Major: {student.major}<br />
          Year: {student.year}<br />
          GPA: {student.gpa}
        </p>

        {showDetails && (
          <ul className="list-group list-group-flush small mb-2 border rounded">
            <li className="list-group-item py-1">Email: {student.email}</li>
            <li className="list-group-item py-1">Phone: {student.phone}</li>
            <li className="list-group-item py-1">Profile Views: {student.views}</li>
            <li className="list-group-item py-1">
              Status:{' '}
              {student.gpa >= 3.5
                ? <span className="text-success fw-semibold">Dean&apos;s List</span>
                : <span className="text-secondary">Good Standing</span>}
            </li>
          </ul>
        )}

        <div className="d-flex flex-wrap gap-1">
          <button className="btn btn-outline-primary btn-sm" onClick={() => onViewProfile(student.id)}>
            View Profile
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}>
            Delete
          </button>
          <button
            className={`btn btn-sm ${showDetails ? 'btn-outline-secondary' : 'btn-outline-success'}`}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
