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
                            text={props.config[i].name}
                            data={jsonData}
                        />
                    );
                    // console.log(tempArray[3].props.data.amiibo[0].name);
                    
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
    }, [])

 return(
    <div className="navbar">
        <ul className="navbar-ul">
            {menuItemList}
        </ul>
    </div>
 )
}

export default NavBar;