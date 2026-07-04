import StatsCard from "./StatsCard";

function Dashboard({ jobs }) {
  const applied = jobs.filter(j => j.status === "Applied").length;
  const interview = jobs.filter(j => j.status === "Interview").length;
  const rejected = jobs.filter(j => j.status === "Rejected").length;
  const offer = jobs.filter(j => j.status === "Offer").length;

  return (
    <div className="dashboard">

      <StatsCard
        title="Total Jobs"
        value={jobs.length}
      />

      <StatsCard
        title="Applied"
        value={applied}
      />

      <StatsCard
        title="Interview"
        value={interview}
      />

      <StatsCard
        title="Rejected"
        value={rejected}
      />

      <StatsCard
        title="Offers"
        value={offer}
      />

    </div>
  );
}

export default Dashboard;
