import './styles.css';
import { ReactComponent as CarCardImg } from '../../assets/img/car-card.svg';
import SearchButton from '../SearchButton';

const ProductCard = () => {
  return (
    <div>
      <div className="product-card-container">
        <div className="img-card-container">
          <CarCardImg />
        </div>
        <div className="product-content-container">
          <h5>Audi Supra TT</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
