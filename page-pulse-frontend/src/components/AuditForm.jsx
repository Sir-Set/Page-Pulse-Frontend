import { useState } from "react";
import { auditUrl } from "../api.js";

export default function AuditForm({ onResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await auditUrl(url);
      onResult(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL (https://...)"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: "300px", marginRight: "1rem" }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Auditing..." : "Audit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
