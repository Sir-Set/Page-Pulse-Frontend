export default function Result({ data }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Audit Result</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
