import './App.css';
import { getTopStories } from '../apiCalls';
import { useState, useEffect } from 'react';
// import  Newsfeed  from  './Newsfeed';

function App() {

  const [stories, setStories] = useState([])
  const [section, setSection] = useState('home')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getTopStories(section)
      .then(data => {
        setStories(data.results)
      })
      .finally(() => setLoading('false'))
   console.log(stories)

  }, [section])
  return (
    <section>
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
      <div className="news-feed">{stories.map(story => {
        return <article className="thumbnail" key={story.updated_date}>
          <h2>{story.title}</h2>
          <h3>{story.subsection}</h3>
          <img src={story.multimedia[0].url} height="200px" width="200px"/>
          <p>{story.published_date}</p>
          <h4>{story.abstract}</h4></article>})}</div>
    </section>
  )
  }

export default App;
