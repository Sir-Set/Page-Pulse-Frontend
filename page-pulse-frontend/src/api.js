export async function auditUrl(url) {
  const response = await fetch("http://localhost:3000/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || "Audit failed");
  }
  return response.json();
}
