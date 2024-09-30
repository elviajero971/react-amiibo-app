import './MainContainer.css';
import DisplayContent from './displaycontent/DisplayContent';
import NavBar from './navbar/NavBar';
import {useState} from 'react';

const MainContainer = () => {
    const baseURL = "https://www.amiiboapi.com/api/"
    const config = [
        {
            name: "Type",
            url: `${baseURL}type`,
            viewUrl: `${baseURL}amiibo/?type=`
        },
        {
            name: "Game Series",
            url: `${baseURL}gameseries`,
            viewUrl: `${baseURL}amiibo/?gameseries=`
        },
        {
            name: "Series",
            url: `${baseURL}amiiboseries`,
            viewUrl: `${baseURL}amiibo/?amiiboSeries=`
        },
        {
            name: "Character",
            url: `${baseURL}character`,
            viewUrl: `${baseURL}amiibo/?character=`
        }
        
    ];

    const [clickData, setClickData] = useState({
        category: "XXXXXX",
        item: "YYYYYY",
        url: "ZZZZZZZ"
    });

    return (
        <div className="main-container">
            <NavBar 
                clickCallback={
                    (category, item, url) =>
                    setClickData({
                        'category' : category, 
                        'item' : item,
                        'url' : url
                    })
                    }
                    config={config}
            />
            <DisplayContent 
                category={clickData.category}
                item={clickData.item}
                url={clickData.url}
            />
        </div>
    )
}

export default MainContainer;