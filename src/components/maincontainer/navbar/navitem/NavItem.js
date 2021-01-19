import './NavItem.css';
import DropDownItem from './dropdownitem/DropDownItem';
import MainContainer from '../../MainContainer';
const NavItem = (props) => {
    // const tempArrayItem = [];
    
    // for (let i=0; i<props.data.length; i+= 1) {
    //     tempArrayItem.push(props.data.amiibo[i]);
    // }
    // console.log(tempArrayItem[3].props.data.amiibo[0].name);
    return (
        <li 
            className= "nav-item nav-item-selected"
        >
            {props.text}
            <div 
                className="dropdown-box" 
            >
                <DropDownItem config={MainContainer.config}/>
            </div>
        </li>
        
    );
    
};

export default NavItem;