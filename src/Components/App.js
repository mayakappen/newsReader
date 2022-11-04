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
        url: '',
        caption: ''
      }],
      byline: '',
      item_type: ''
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

const dateHandler = (date) => {
  let dateArray = Array.from(date).splice(0, 10)
  let formatted = dateArray[6] + dateArray[5] + '-'+ dateArray[8] + dateArray[9] + '-' + dateArray[0] + dateArray[1] + dateArray[2] + dateArray[3]
  return formatted
}

  return (
    <section className="App">
    <Navbar setSection={setSection} />
      {articleView
      ? <Article selected={selectedArticle} getDate={dateHandler}/>
      : <div className="news-feed">{stories.map((story) => {
       return <article onClick={() => selectionHandler(story)} className="thumbnail" key={story.short_url}>
          <h2>{story.title}</h2>
          <img src={story.multimedia[0].url} alt={story.multimedia[0].caption}/>
          <span class="inline-container">
          <p>{dateHandler(story.published_date)}</p>
         <h3>{story.subsection}</h3>
         </span>
          </article>})}</div>
      }
    </section>
  )
  }

export default App;
