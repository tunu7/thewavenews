import Form from "next/form";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ defaultValue = "", className = "", inputClassName = "", autoFocus = false, onSubmit }) => {
  return (
    <Form
      action="/search"
      role="search"
      onSubmit={onSubmit}
      className={className}
    >
      <label className="relative block">

        <span className="sr-only">Search news</span>

        <FaSearch
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted pointer-events-none"
        />

        <input
          type="search"
          name="q"
          defaultValue={defaultValue}
          placeholder="Search news"
          autoFocus={autoFocus}
          className={`w-full bg-white border border-rule rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition ${inputClassName}`}
        />
      </label>
    </Form>
  );
};

export default SearchForm;
