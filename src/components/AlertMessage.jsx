function AlertMessage({ message, variant, onClose }) {
  if (!message) return null;

  return (
    <div
      className={`alert alert-${variant} alert-dismissible fade show mx-auto`}
      style={{ maxWidth: 760 }}
      role="alert"
    >
      {message}
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    </div>
  );
}

export default AlertMessage;
