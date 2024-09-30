import {useState} from 'react';
import './NavItem.css';
const NavItem = (props) => {
    const [navBarClicked, setNavBarClicked] = useState(false);
    const childArray = props.data.amiibo.map(
        (element) => <div className="navbar-item-element" onClick={()=>{props.clickCallback(props.text, element.name)}}>{element.name}</div>
    );

    let navItemClassName = "navbar-item";
    if(navBarClicked) navItemClassName += " clicked";

    const clickGesture = () => {
        setNavBarClicked(!navBarClicked);
    }
    return (
        <div
            onClick={clickGesture}
            className= {navItemClassName}>
            <div className="navbar-item-text">
                {props.text}
            </div>
            
            <div className="navbar-item-list">
                <div className="navbar-item-scroller">
                    {childArray}
                </div>
            </div>
        </div>
        
    );
    
};

export default NavItem;