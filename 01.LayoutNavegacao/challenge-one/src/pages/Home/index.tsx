import { ReactComponent as MainImage } from '../../assets/img/car-header.svg';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="base-card-container">
          <div className="home-content-container">
            <div className="home-content-text">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
            <div className="home-img-container">
              <MainImage />
            </div>
          </div>
        </div>
        <div className="section-card-container">
          <div className="subsection-container">
            <div>
              <Button />
            </div>
            <div>
              <span>Comece agora a navegar</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
