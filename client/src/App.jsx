import { useEffect, useState } from "react";
import API from "./services/api";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import JobForm from "./components/JobForm";
import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const loadJobs = async () => {
      await fetchJobs();
    };

    loadJobs();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addJob = async () => {
  try {

    if (editing) {

      await API.put(`/jobs/${editId}`, form);

      setEditing(false);
      setEditId(null);

    } else {

      await API.post("/jobs", form);

    }

    setForm({
      company: "",
      role: "",
      status: "Applied",
    });

    fetchJobs();

  } catch (err) {
    console.log(err);
  }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.company
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || job.status === filter;

    return matchesSearch && matchesFilter;
  });
  const editJob = (job) => {

  setForm({
    company: job.company,
    role: job.role,
    status: job.status,
  });

  setEditId(job._id);

  setEditing(true);

};

  return (
    <>
      <Navbar />

      <div className="container">

        <Dashboard jobs={jobs} />

        <JobForm
    form={form}
    handleChange={handleChange}
    addJob={addJob}
    editing={editing}
/>i

        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <JobList
    jobs={filteredJobs}
    onDelete={deleteJob}
    onEdit={editJob}
/>

      </div>
    </>
  );
}

export default App;