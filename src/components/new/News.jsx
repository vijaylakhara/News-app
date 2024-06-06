import { useEffect, useState } from 'react'
import NewCard from './NewCard'
import './news.css'
import Spinner from './Spinner'

const News = (props) => {
  
  const[state,setState]=useState({
    articles: [],
    loading:false,
    page:1,
  })
  const[load,setLoad]=useState(false)
  const update =async()=>{
    const api= `https://newsapi.org/v2/top-headlines?country=us&apiKey=19d4d5a46c4c4f70aa4456ed9a59dbeb&${state.page}&pageSize=${props.pageSize}`
  // setLoad(true)
    const data=await fetch(api)
    const newsData=await data.json()
    
     setState({articles:newsData.articles})
    //  setLoad(false)
  }
  

  useEffect(()=>{
    update()
  })


  const handleNext=()=>{
    console.log("next")
  }
  const handlePrev=()=>{
    console.log("previous")
  }
  return (
    <>
  <div className="container">
    <h2> --Top HeadLine-- </h2>
    {/* <Spinner/> */}
    <div className='content-item'>
    {state.articles.map((element)=>{
     return  <>
    <NewCard title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,70):" "} imageUrl= {element.urlToImage} newUrl={element.url}/>
    </>
    
    })}
    </div>
    {/* {load && <Spinner/>} */}
    <div className="container d-flex justify-content-between my-5">
    <button type='button' className='btn btn-dark' onChange={handlePrev}>previous</button>
    <button type='button' className='btn btn-dark ' onChange={handleNext}>next</button>
    </div>
      </div>

    </>
  )
}

export default News
