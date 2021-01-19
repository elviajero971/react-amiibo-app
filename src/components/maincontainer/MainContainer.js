import './MainContainer.css';
import DisplayContent from './displaycontent/DisplayContent';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

const MainContainer = () => {
    const baseURL = "https://www.amiiboapi.com/api/"
    const config = [
        {
            name: "Type",
            url: `${baseURL}type`
        },
        {
            name: "Game Series",
            url: `${baseURL}gameseries`
        },
        {
            name: "Series",
            url: `${baseURL}amiiboseries`
        },
        {
            name: "Character",
            url: `${baseURL}character`
        }
        
    ];

    return (
        <div className="main-container">
            <NavBar config={config}/>
            <DisplayContent/>
            <Footer/>
        </div>
    )
}

export default MainContainer;