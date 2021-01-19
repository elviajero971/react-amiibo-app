import './Image.css';
import img from '../../../../../img/roger-federer.jpg';

const Image = () => {
 return(
    <img className="card-img" src={img} alt="Roger Federer"/>   
 )
}

export default Image;