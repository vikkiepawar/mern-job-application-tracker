function SearchBar({ search, setSearch }) {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search company or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default SearchBar;
