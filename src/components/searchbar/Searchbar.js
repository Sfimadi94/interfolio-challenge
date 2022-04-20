import "./searchbar.css";

const Searchbar = (props) => {
  const handleSearch = (e) => {
    props.setSearch(e.target.value);
  };
  return (
    <input
      type="text"
      className="searchbar"
      placeholder="Search"
      value={props.search}
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default Searchbar;
