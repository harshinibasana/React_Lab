import React, { useRef, useState } from "react";

export default function Feedback() {
  const nickRef = useRef();
  const ratingRef = useRef();
  const recommendRef = useRef();
  const commentsRef = useRef();
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const nickname = nickRef.current?.value ?? "";
    const rating = ratingRef.current?.value ?? "";
    const wouldRecommend = recommendRef.current?.checked ?? false;
    const comments = commentsRef.current?.value ?? "";

    if (!rating) {
      setError("Please provide a rating.");
      return;
    }

    setSummary({
      nickname,
      rating,
      wouldRecommend,
      comments,
    });
  }

  return (
    <div className="card">
      <h3>Feedback (Uncontrolled Form)</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 720 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Nickname</label><br />
          <input ref={nickRef} placeholder="Nickname (optional)" style={{ padding: 8, width: "100%" }} />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Rating (1-5)</label><br />
          <select ref={ratingRef} defaultValue="">
            <option value="">-- pick --</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            <input ref={recommendRef} type="checkbox" /> Would recommend?
          </label>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Comments</label><br />
          <textarea ref={commentsRef} rows={4} style={{ width: "100%", padding: 8 }} />
        </div>

        <div>
          <button type="submit" style={{ padding: "8px 12px" }}>Submit Feedback</button>
          {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
        </div>
      </form>

      {summary && (
        <div style={{ marginTop: 16, border: "1px solid #ccc", padding: 12, borderRadius: 6 }}>
          <h4>Feedback Summary</h4>
          <p><strong>Nickname:</strong> {summary.nickname || "—"}</p>
          <p><strong>Rating:</strong> {summary.rating}</p>
          <p><strong>Would Recommend:</strong> {summary.wouldRecommend ? "Yes" : "No"}</p>
          <p><strong>Comments:</strong> {summary.comments || "—"}</p>
        </div>
      )}
    </div>
  );
}
