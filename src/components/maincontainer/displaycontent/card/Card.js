import './Card.css';
import Image from './image/Image';
import Title from './title/Title';
const Card = () => {
    return(
        <div className="card">
            <Image/>
            <Title/>
        </div>
    )
}

export default Card;