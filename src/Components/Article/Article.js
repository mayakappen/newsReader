import {useState, useEffect} from 'react'

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
        <div className="article-view" key={Date.now}>
           <h1>{story.title}</h1>
           <h4>{story.byline}</h4>
           <h3>{story.subsection}</h3>
            <img src={story.multimedia[0].url} alt={story.multimedia[0].caption}/>
            <p>{date}</p>
            <p>{story.abstract}</p>
            <a href={story.url}>Full Story ➡️</a>
        </div>
    );
}

export default Article;