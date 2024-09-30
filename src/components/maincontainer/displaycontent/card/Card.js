import './Card.css';

const Card = (props) => {
    let childArrayCard = [];
    if (props.data) {
        // Add a unique key prop to each card item
        childArrayCard = props.data.amiibo.map((cardItem, index) => {
            return (
                <div key={index} className="card-item">  {/* Added key={index} */}
                    <h3>{cardItem.name}</h3>
                    <img className="card-img" src={cardItem.image} alt={cardItem.name} />
                </div>
            );
        });
    }

    return (
        <div className="card-box">
            {childArrayCard}
        </div>
    );
};

export default Card;
