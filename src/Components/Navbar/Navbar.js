function Navbar(props) {
const setSection = (section) => {
    props.setSection(section)
}
    return (
        <nav>
            <button onClick={() => setSection('us')}>US</button>
            <button onClick={() => setSection('world')}>World</button>
            <button onClick={() => setSection('nyregion')}>NY</button>
            <button onClick={() => setSection('business')}>Business</button>
            <button onClick={() => setSection('opinion')}>Opinion</button>
            <button onClick={() => setSection('sports')}>Sports</button>
            <button onClick={() => setSection('arts')}>Arts</button>
            <button onClick={() => setSection('books')}>Books</button>
            <button onClick={() => setSection('fashion')}>Style</button>
            <button onClick={() => setSection('food')}>Food</button>
            <button onClick={() => setSection('technology')}>Tech</button>
        </nav>
      );
}

export default Navbar;