import JobCard from "./JobCard";

function JobList({
    jobs,
    onDelete,
    onEdit
})  {
  return (
    <>
      {jobs.map((job) => (
  <JobCard
    key={job._id}
    job={job}
    onDelete={onDelete}
    onEdit={onEdit}
  />
))}
    </>
  );
}

export default JobList;
