
import { useState, useMemo } from "react";

import BorderGlow from "../component/UI/BorderGlow (1)"

const Home =()=> {
  
const news = [
    { id: 1, title: "AI Revolution Begins", genre: "Technology", date: "2026-07-21", image: "https://via.placeholder.com/300x180" },
    { id: 2, title: "India Wins Series", genre: "Sports", date: "2026-07-18", image: "https://via.placeholder.com/300x180" },
    { id: 3, title: "Stock Market Rises", genre: "Business", date: "2026-07-20", image: "https://via.placeholder.com/300x180" },
    { id: 4, title: "New Health Guidelines", genre: "Health", date: "2026-07-15", image: "https://via.placeholder.com/300x180" },
    { id: 5, title: "Movie Breaks Records", genre: "Entertainment", date: "2026-07-17", image: "https://via.placeholder.com/300x180" },
  ];
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortDate, setSortDate] = useState("");
  const [sortTitle, setSortTitle] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const filteredNews = useMemo(() => {
    let data = [...news];

    if (search) {
      data = data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre !== "All") {
      data = data.filter(item => item.genre === genre);
    }

    if (sortDate === "latest") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortDate === "oldest") {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (sortTitle === "az") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortTitle === "za") {
      data.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filterDate) {
  data = data.filter(item => item.date === filterDate);
}

    return data;
  }, [search, genre, sortDate, sortTitle,filterDate]);

  return (
    <div className="p-6 bg-slate-950 text-white">
      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search news..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option>All</option>
          <option>Technology</option>
          <option>Sports</option>
          <option>Business</option>
          <option>Health</option>
          <option>Entertainment</option>
        </select>

        <input
            type="date"
            className="border p-2 rounded"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            />
            
        <select
          className="border p-2 rounded"
          value={sortDate}
          onChange={(e) => setSortDate(e.target.value)}
        >
          <option value="">Date</option>
          <option value="latest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        <select
          className="border p-2 rounded"
          value={sortTitle}
          onChange={(e) => setSortTitle(e.target.value)}
        >
          <option value="">Title</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-950 text-white">
        {filteredNews.map(item => (
          <div key={item.id} className="border rounded-lg shadow p-4">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-3">{item.title}</h2>
            <p className="text-gray-600">{item.genre}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home