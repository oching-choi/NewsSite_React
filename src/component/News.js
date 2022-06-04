function News(props){
    return(
      <div className='home-wrapper'>
        <h1 className='logo'>NewsSite</h1>
        <form className='search-form'>
            <input type='text' className='search-input' placeholder='검색어를 입력해주세요.'></input>
            <input type='submit' className='submit-btn' value='검색' onClick={(e)=>{
              getNews(e);
            }}></input>
        </form>
        <div className='news-area'>
          <ul className='news'>
            <li className='news-list'>어쩌구</li>
          </ul>
        </div>
      </div>
    )
  }

  async function getNews(e){
    e.preventDefault()
  }

  export default News