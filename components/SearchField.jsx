import { Search } from "lucide-react";

export default function SearchField({ searchValue, setSearchValue, placeholder, setRoleFilter }) {
  function handleSearchChange(event) {
    setSearchValue(event.target.value);
    setRoleFilter && setRoleFilter("All");
  }
  return (
    <div className="flex-center relative my-10 w-full flex-col">
      <div className="relative mx-auto w-full max-w-xl">
        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
        <input
          type="text"
          placeholder={placeholder ? placeholder : ""}
          value={searchValue ? searchValue : ""}
          onChange={setSearchValue ? handleSearchChange : null}
          className="search_input peer"
        />
      </div>
    </div>
  );
}
