import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div>
      <h1>Search Page</h1>
      {q ? <p>Query: {q}</p> : <p>No search query provided.</p>}
    </div>
  );
}
