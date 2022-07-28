import Navbar from '../../components/Navbar';
import Search from '../../components/Search';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <Search />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <p>INSERIR PRODUCTCARD</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
