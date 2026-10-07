type Filter = "all" | "pinned" | "archived";

type Props = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

function FilterButtons({ filter, setFilter }: Props) {
  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={filter === "pinned" ? "active" : ""}
        onClick={() => setFilter("pinned")}
      >
        Pinned
      </button>

      <button
        className={filter === "archived" ? "active" : ""}
        onClick={() => setFilter("archived")}
      >
        Archived
      </button>
    </div>
  );
}

export default FilterButtons;
