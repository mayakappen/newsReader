import './App.css';
import { getTopStories } from './apiCalls';
import { useState, useEffect } from 'react';

function App() {

  const [stories, setStories] = useState([])
  const [section, setSection] = useState('home')
  const [isLoading, setLoading] = useState(true)


useEffect(() => {
 getTopStories(section)
  .then(data => {
    setStories(data)
  })
  console.log(stories)

 }, [])

// const articles = stories.map(story =>
//     <li>{story.title}</li>
//   )

// const displayStories = articles.results.map((result) => {
//    return <li>{result.title}</li>
//   })

  return (
    <section>

    </section>
  )
  }

export default App;
