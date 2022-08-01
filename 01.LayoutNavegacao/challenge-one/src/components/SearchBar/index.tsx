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
            <button type="submit" className="base-card-container">
              <p>Buscar</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
