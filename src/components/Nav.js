const Nav = ({ getPhotos }) => {
    const linkQuery1 = "Cats";
    const linkQuery2 = "Dogs";
    const linkQuery3 = "Computers";

    return (
    <nav className="main-nav">
        <ul>
            <li><a href="#" onClick={ () => getPhotos(linkQuery1) }>{linkQuery1}</a></li>
            <li><a href="#" onClick={ () => getPhotos(linkQuery2) }>{linkQuery2}</a></li>
            <li><a href="#" onClick={ () => getPhotos(linkQuery3) }>{linkQuery3}</a></li>
        </ul>
    </nav>
    )
};

export default Nav;