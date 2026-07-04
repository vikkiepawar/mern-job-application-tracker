function JobCard({ job, onDelete, onEdit }) {
  return (
    <div className="card">

      <h3>{job.company}</h3>

      <p>{job.role}</p>

      <span className={`status ${job.status.toLowerCase()}`}>
        {job.status}
      </span>

      <br />
      <br />
      <button onClick={() => onEdit(job)}>
        Edit
      </button>
      
      <button onClick={() => onDelete(job._id)}>
        Delete
      </button>

    </div>
  );
}

export default JobCard;