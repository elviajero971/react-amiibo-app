import './DisplayContent.css';
import Card from './card/Card';
import {useState, useEffect} from 'react';

const DisplayContent = (props) => {
    const [cardListItem, setCardListItem] = useState([]);
    useEffect(() => {
        const asyncFunction = async() => {
            const tempArrayCard=[];
            console.log('url: ',props.url)
            try {
                const dataCard = await fetch(props.url)
                const jsonDataCard = await dataCard.json();
                tempArrayCard.push(
                    <Card data={jsonDataCard}/>
                );

            } catch (e){
                tempArrayCard.push(
                    <Card data={false} text={"Error"}/>
                );
            }
            setCardListItem(tempArrayCard);
        }

        asyncFunction();
    }, [props.url]);
    return(
        <div className="display-content">
            <div className="display-content-header">
                {props.category} / {props.item}
            </div>
            {cardListItem}
        </div>
    )
}

export default DisplayContent;