import{ useState } from 'react';
import axios from 'axios';

function News(props){
    const [topic, setTopic] = useState('');

    return( 
      <div className='home-wrapper'>
        <h1 className='logo'>NewsSite</h1>
        <form className='search-form'>
            <input type='text' className='search-input' placeholder='검색어를 입력해주세요.' onChange={(e)=>{
              setTopic(e.target.value);
            }}></input>
            <input type='submit' className='submit-btn' value='검색' onClick={(e)=>{
              getNews(e);
            }}></input>
        </form>
        <div className='news-area'>
          <ul className='news'>
           
          </ul>
        </div>
      </div>
    )
  
  async function getNews(e) {
    const apiKey = '2721d1f0de38415b978ddeed5ff2291a';
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    e.preventDefault();

    try {
      const response = await axios.get(url);
      const article = response.data.articles;
      //news list 렌더함수
      renderNews(article);
    } catch (error) {
      //error list 렌더
      renderError()
    }
  }

  function renderNews(article){
    const news = document.querySelector('.news');
    let newsList = article.reduce((prevLi, currentLi, index)=>{
        return (
            prevLi + 
            `<li class="news-list">
               <a href="${article[index].url}" target="_blank">
                    <div class="news-thumbnail">
                        <img src="${article[index].urlToImage}">
                    </div>
                    <div class="news-contents">
                        <div class="news-info">
                            <span class="news-author">${article[index].author}</span>
                            <span class="news-date">${article[index].publishedAt}</span>
                        </div>
                        <p class="news-title">${article[index].title}</p>
                        <p class="news-description">${article[index].description}</p>
                    </div>
               </a> 
            </li>`
        )
    },'');
    news.innerHTML=newsList;
  }

  function renderError(){
    const news = document.querySelector('.news');
    let newsList = `<li style="color:red">error<li>`
    news.innerHTML=newsList;
  }
}

  export default News