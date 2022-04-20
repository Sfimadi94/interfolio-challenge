import { useState, useEffect } from "react";

import "./App.css";
import List from "./components/List";
import Searchbar from "./components/searchbar/Searchbar";

const App = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("allen renear");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (search.length > 1) {
      adjustQuery(search);
    }
  }, [search, currentPage]);

  const adjustQuery = (query) => {
    const splitQuery = query.split(" ").join("+");

    getData(splitQuery);
  };
  const getData = async (query) => {
    const offset = currentPage * 10;
    const response =
      await fetch(`http://api.crossref.org/works?query=${query}&rows=10&offset=${offset}
`);

    const data = await response.json();

    setData(data.message.items);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main className="container">
      <section className="header-container">
        <h1 className="header"> Works </h1>
        <Searchbar search={search} setSearch={setSearch} />
      </section>
      {data ? (
        <section className="list-container">
          <List data={data} />
          <section className="pagination">
            <input
              className="page-buttons"
              type="button"
              onClick={previousPage}
              value="<"
            />
            <p className="currentPage">{currentPage}</p>
            <input
              className="page-buttons"
              type="button"
              onClick={nextPage}
              value=">"
            />
          </section>
        </section>
      ) : null}
    </main>
  );
};

export default App;
