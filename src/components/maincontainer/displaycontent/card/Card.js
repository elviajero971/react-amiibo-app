import './Card.css';

const Card = (props) => {
    let childArrayCard=[];
    if (props.data){
        console.log("props.data.amiibo.length: ",props.data.amiibo.length);

        childArrayCard = props.data.amiibo.map((cardItem) =>{
            return <div className="card-item">
                        <h3>{cardItem.name}</h3>
                        <img className="card-img" src={cardItem.image} alt={cardItem.name}/>
                    </div>
        })
    }

    console.log("tableau childArrayCardName: ", childArrayCard);
    
    return(
        <div className="card-box">
            {childArrayCard}
        </div>
    )
}

export default Card;