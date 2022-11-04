import {useState, useEffect} from 'react'

function Article(props) {
    const [story, setStory] = useState('')
    useEffect(() => {
        setStory(props.article)
        console.log(story)
    })
    return (
        <div>
           <h1>{story.title}</h1>
           <h2>{story.byline}</h2>
           <h3>{story.subsection}</h3>

        </div>
    );
}

export default Article;