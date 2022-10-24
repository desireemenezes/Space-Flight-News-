import React , { useState, useEffect } from 'react';
import Header from '../components/Header';
import Articles from '../components/Articles';

import Api from  '../service/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './style'

const Home = (props) => {

  const [article, setArticle] =  useState([]);

  async function loadArticles() {
		await Api.get(``).then(response => {
      setArticle(response.data);
      console.log(response.data)
			})
		}
  useEffect(() =>{
    loadArticles();
  }, [])

    return (
        <S.Content>        
				  <Header />
          { article.map((articles, index) => {
            if(index % 2 === 0){
              articles.event = true
            } 
            return(
              <Articles event={articles.event} imageUrl={articles.imageUrl} title={articles.title} publishedAt={articles.publishedAt} newsSite={articles.newsSite} summary={articles.summary} key={articles.id}/> 
              )
            })
          }
        </S.Content>  
  );
}

export default Home;