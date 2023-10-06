import { useState, useEffect } from "react";
import { getArticlesByWord } from "./api";

const DataRequest = () => {
  const [articles, setArticles] = useState([]);

  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    getData("debates");
  }, []);

  const getData = async (word) => {
    const data = await getArticlesByWord(word);
    setArticles(data.data.response.results);
  }
  const inputHandler = (e) => {
    setSearchWord(e.target.value);
  }

  const buttonHandler = () => {
    getData(searchWord);
  }

  return (
    <>
      <div className="request">
        <input value={searchWord}
          onChange={inputHandler} />
        <button onClick={buttonHandler}>Пошук</button>
        {articles.map((article) => {
          return (
            <p key={article.id}>
              <a href={article.webUrl}>{article.webTitle}</a>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DataRequest;
