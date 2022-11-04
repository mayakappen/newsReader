import './Navbar.css'

function Navbar(props) {

    const setSection = (section) => {
    props.setSection(section)
}
    return (
        <nav className="navbar">
            <h5 className="home" onClick={() => setSection('home')}>NewsReader</h5>
            <button className="navBtn"onClick={() => setSection('us')}>US</button>
            <button className="navBtn" onClick={() => setSection('world')}>World</button>
            <button className="navBtn" onClick={() => setSection('nyregion')}>NY</button>
            <button className="navBtn" onClick={() => setSection('business')}>Business</button>
            <button className="navBtn" onClick={() => setSection('opinion')}>Opinion</button>
            <button className="navBtn" onClick={() => setSection('sports')}>Sports</button>
            <button className="navBtn" onClick={() => setSection('arts')}>Arts</button>
            <button className="navBtn" onClick={() => setSection('books')}>Books</button>
            <button className="navBtn" onClick={() => setSection('fashion')}>Style</button>
            <button className="navBtn" onClick={() => setSection('food')}>Food</button>
            <button className="navBtn" onClick={() => setSection('technology')}>Tech</button>
        </nav>
      );
}

export default Navbar;