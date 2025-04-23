import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="bg-yellow-100 placeholder:text-stone-400 px-4 py-2 rounded-full sm:w-64 focus:ring focus:ring-offset-2 focus:ring-yellow-500"
        placeholder=" search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
