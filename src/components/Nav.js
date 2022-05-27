import { NavLink } from "react-router-dom";

const Nav = () => {
    const linkQuery1 = "Cats";
    const linkQuery2 = "Dogs";
    const linkQuery3 = "Computers";

    return (
    <nav className="main-nav">
        <ul>
            <li><NavLink to={`/${linkQuery1}`} >{linkQuery1}</NavLink></li>
            <li><NavLink to={`/${linkQuery2}`} >{linkQuery2}</NavLink></li>
            <li><NavLink to={`/${linkQuery3}`} >{linkQuery3}</NavLink></li>
        </ul>
    </nav>
    )
};

export default Nav;