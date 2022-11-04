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
        console.log(story)
    }, [])
    return (
        <div className="article-view" key={Date.now}>
           <h1>{story.title}</h1>
           <h2>{story.byline}</h2>
           <h3>{story.subsection}</h3>
            <img src={story.multimedia[0].url}/>
            <p>{story.published_date}</p>
            <h4>{story.abstract}</h4>
            <a href={story.url}>Full Story ➡️</a>
        </div>
    );
}

export default Article;