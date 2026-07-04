function JobForm({
    form,
    handleChange,
    addJob,
    editing
}) {

  return (
    <div>

      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>

      <button onClick={addJob}>
    {editing ? "Update Job" : "Add Job"}
</button>

    </div>
  );
}

export default JobForm;
