import './styles.css';
import { ReactComponent as CarCardImg } from '../../assets/img/car-card.svg';

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <div className="img-card-container">
        <CarCardImg />
      </div>
      <div className="product-content-container">
        <h5>Audi Supra TT</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button type="submit" className="base-card-container">
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
