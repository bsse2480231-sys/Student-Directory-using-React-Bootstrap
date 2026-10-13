function PageHeader({ title, onAdd }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 my-3">
      <h2 className="h3 mb-0">{title}</h2>
      <button
        className="btn btn-primary btn-sm"
        style={{ backgroundColor: '#1f3a6e', borderColor: '#1f3a6e' }}
        onClick={onAdd}
      >
        Add New Student
      </button>
    </div>
  );
}

export default PageHeader;
