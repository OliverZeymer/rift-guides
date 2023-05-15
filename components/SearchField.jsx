export default function SearchField({ searchValue, setSearchValue, handleSearchChange, placeholder }) {
  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className="relative w-full flex-center flex-col my-10">
      <div className="relative w-full max-w-xl mx-auto">
        <img src="/assets/icons/search.svg" alt="Search Icon" fill="#fff" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
        <input
          type="text"
          placeholder={placeholder ? placeholder : ""}
          value={searchValue ? searchValue : undefined}
          onChange={setSearchValue ? handleSearchChange : undefined}
          className="search_input peer"
        />
      </div>
    </div>
  );
}
