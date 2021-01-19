import './Image.css';
import img from '../../../../../img/roger-federer.jpg';

const Image = () => {
 return(
    <img className="img-card" src={img} alt="Roger Federer"/>   
 )
}

export default Image;