function FilterBar({
  search,
  setSearch,
  filter,
  setFilter
}) {
  return (
    <div className="filter-bar">

      <input
        placeholder="Search Company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>

    </div>
  );
}

export default FilterBar;
