import './App.css';
import { getTopStories } from '../apiCalls';
import  Article  from './Article/Article.js'
import Navbar from './Navbar/Navbar.js'
import { useState, useEffect } from 'react';

function App() {

  const [stories, setStories] = useState([])
  const [section, setSection] = useState('home')
  const [isLoading, setLoading] = useState(true)
  const [articleView, setArticleView] = useState(false)
  const [selectedArticle, selectArticle] = useState({
      title: '',
      subsection: '',
      published_date: '',
      abstract: '',
      multimedia: [{
        url: ''
      }],
      byline: ''
  })
  
useEffect(() => {
  setArticleView(false)
    getTopStories(section)
      .then(data => {
        setStories(data.results)
      })
      .finally(() => setLoading('false'))
   console.log(stories)
  }, [section])

const selectionHandler = (story) => {
  setArticleView(true)
  selectArticle(story)
  console.log(story)
}
  return (
    <section>
    <Navbar setSection={setSection} />
      {articleView
      ? <Article selected={selectedArticle}/>
      : <div className="news-feed">{stories.map(story => {
        return <article onClick={() => selectionHandler(story)} className="thumbnail" key={story.short_url}>
          <h2>{story.title}</h2>
          <h3>{story.subsection}</h3>
          <img src={story.multimedia[0].url} height="200px" width="200px"/>
          <p>{story.published_date}</p>
          <h4>{story.abstract}</h4></article>})}</div>
      }
    </section>
  )
  }

export default App;
