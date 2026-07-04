import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      role: "Frontend Intern",
      status: "Applied",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Software Engineer Intern",
      status: "Interview",
    },
  ]);

  const [search, setSearch] = useState("");

  function addJob(job) {
    setJobs([
      ...jobs,
      {
        id: Date.now(),
        ...job,
      },
    ]);
  }

  function deleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <JobForm addJob={addJob} />

      <SearchBar search={search} setSearch={setSearch} />

      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          company={job.company}
          role={job.role}
          status={job.status}
          deleteJob={deleteJob}
        />
      ))}
    </>
  );
}

export default Dashboard;
