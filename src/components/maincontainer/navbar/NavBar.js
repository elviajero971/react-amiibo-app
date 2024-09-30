import './NavBar.css';
import {useState, useEffect} from 'react';
import NavItem from './navitem/NavItem';

const NavBar = ({ config, clickCallback }) => {

    const [menuItemList, setMenuItemList] = useState([]);

    useEffect(() => {
        const asyncFunction = async() => {
            const tempArray = [];

            for (let i = 0; i < config.length; i += 1) {
                try {
                    const data = await fetch(config[i].url);
                    const jsonData = await data.json();
                    tempArray.push(
                        <NavItem
                            clickCallback={
                                (category, item) =>
                                    clickCallback(
                                        category,
                                        item,
                                        config[i].viewUrl + item)}
                            text={config[i].name}
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
    }, [config, clickCallback]); // Now both config and clickCallback are dependencies

    return (
        <div className="navbar">
            {menuItemList}
        </div>
    );
}

export default NavBar;
