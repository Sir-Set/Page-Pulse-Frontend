import { useState } from "react";
import AuditForm from "./components/AuditForm.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Page Pulse</h1>
      <AuditForm onResult={setResult} />
      {result && <Result data={result} />}
      <footer style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        Built for <a href="https://digitalheroesco.com">Digital Heroes Training Task</a>
      </footer>
    </div>
  );
}

export default App;
