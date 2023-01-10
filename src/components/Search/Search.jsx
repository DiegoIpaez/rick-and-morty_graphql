import { searchInput, labelOfSearch } from './search.module.css';

export default function Search({ search, setSearch, title }) {
  const onChange = (e) => {
    const data = {
      ...search,
      value: e.target.value,
    };
    setSearch(data.value);
  };
  return (
    <div className="container my-4">
      <div className="form-floating mb-3 shadow rounded">
        <input
          type="text"
          className={`form-control ${searchInput}`}
          placeholder="Search you favorite character..."
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="floatingInput">
          <span className={labelOfSearch}>{title}</span>
        </label>
      </div>
    </div>
  );
}
