import './App.css';
import { getTopStories } from './apiCalls';
import { useState, useEffect } from 'react';

function App() {

  const [stories, setStories] = useState([])
  const [section, setSection] = useState('home')
  const [isLoading, setLoading] = useState(true)
const articles = []
  useEffect((articles) => {
  articles = getTopStories(section)
 console.log(articles)
 }, [])
  return (
    <section>

    </section>
  )
}

export default App;
