import Filter from "./filter";
import Search from "./search";
import Sort from "./sort";

function FilterAndSearch() {
  return (
    <div className=" w-full flex flex-col gap-4 md:flex-row items-end justify-between">
      <Search
        id="programme"
        placeholder="Search Programme or Course Code"
        label="Programme"
      />

      <Filter id="faculty" label="Faculty" />
      <div>
        <Sort />
      </div>
    </div>
  );
}

export default FilterAndSearch;
