import SearchButton from '../SearchButton';
import './styles.css';

const SearchBar = () => {
  return (
    <div className="search-container container">
      <div className="section-card-container">
        <div className="input-card-content">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Digite sua busca"
              className="form-control"
            />
            <SearchButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
