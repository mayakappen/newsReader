import {useState, useEffect} from 'react'
import './Article.css'

function Article(props) {
    const [story, setStory] = useState({
        title: '',
        byline: '',
        subsection: '',
        multimedia: [{
            url: ''
        }],
        published_date: '',
        abstract: '',
        url: ''
    })
    const [date, setDate] = useState('')

    useEffect(() => {
        const story = props.selected
        setStory({
            title: story.title,
            byline: story.byline,
            subsection: story.subsection,
            multimedia: [{
                url: story.multimedia[0].url
            }],
            published_date: story.published_date,
            abstract: story.abstract,
            url: story.url
        })
        const datee = props.getDate(story.published_date)
        setDate(datee)
        console.log(story)
        console.log(date)
    }, [])
    return (
    <> 
        <h1 className="title">{story.title}</h1>
        <div className="article-view" key={Date.now}>
            <div className="info">
                <h4 className="byline">{story.byline}</h4>
                <h3 className="subsection">{story.subsection}</h3>
                <img className="article-image" src={story.multimedia[0].url} alt={story.multimedia[0].caption}/>
                <p className="date">{date}</p>
            </div>
            <div className="description">
                <p className="abstract">{story.abstract}</p>
                <a href={story.url}>Full Story ➡️</a>
            </div>
        </div>
    </>
    );
}

export default Article;