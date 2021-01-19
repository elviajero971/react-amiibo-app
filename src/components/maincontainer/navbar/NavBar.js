import './NavBar.css';
import {useState, useEffect} from 'react';
import NavItem from './navitem/NavItem';

const NavBar = (props) => {

    const [menuItemList, setMenuItemList] = useState([]);

    useEffect(() => {
        const asyncFunction = async() => {
            const tempArray=[];

            for (let i=0; i<props.config.length; i+= 1) {
                try {
                    const data = await fetch(props.config[i].url);
                    const jsonData = await data.json();
                    tempArray.push(
                        <NavItem
                            clickCallback={
                                (category, item) => 
                                props.clickCallback(
                                    category, 
                                    item, 
                                    props.config[i].viewUrl + item)}
                            hoverGesture={i <= 1} 
                            text={props.config[i].name}
                            data={jsonData}
                        />
                    );
                    
                } catch (e) {
                    tempArray.push(
                        <NavItem
                            text={"Error"}
                        />
                    );
                }
            }
            setMenuItemList(tempArray);
        }
        asyncFunction();
    }, [props.config])

 return(
    <div className="navbar">
            {menuItemList}
    </div>
 )
}

export default NavBar;