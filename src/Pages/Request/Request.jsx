

import { useState, useEffect } from 'react';

import axios from "axios";
import { API_KEY } from './key';


const src = `https://content.guardianapis.com/search?tag=environment/recycling&api-key=${API_KEY}`

const apiKey = API_KEY;

const Request = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios
            .get(src, {withCredentials: false})
            .then(data => {
                setArticles(data.data.response.results);
            })
    }, [])

    return (
        <>
            <div className="request">
                {articles.map(article => {
                    return (
                        <p><a href={article.webUrl}>{ article.webTitle }</a></p>
                    )
                })}
            </div>
            </>
    );
};

export default Request;