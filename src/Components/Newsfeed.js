import {useEffect, useState} from 'react'

const Newsfeed = (props) => {
    const [articles, displayArticles] = useState([])
    return (
        <ul>
            {props.articles.map((article) => {
                <li>{article.title}</li>
            })}
        </ul>
      );
}

export default Newsfeed;