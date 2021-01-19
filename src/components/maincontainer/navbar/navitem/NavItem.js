import './NavItem.css';
const NavItem = (props) => {
    const tempArrayItem = [];
    
    for (let i=0; i<props.data.length; i+= 1) {
        tempArrayItem.push(props.data.amiibo[i]);
    }
    // console.log(tempArrayItem[3].props.data.amiibo[0].name);
    return (
        <li 
            className= "nav-item nav-item-selected"
        >
            {props.text}
        </li>
        
    );
    
};

export default NavItem;