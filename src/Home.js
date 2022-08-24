import React,  { useEffect , useState } from 'react'
import './Home.css'
//import instance from './axios'
import axios from 'axios'
import {baseUrl} from './config.js'

function Home(quote_url) {
  const [ quotes, setQuotes ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(baseUrl+'/random');
       alert(JSON.stringify(data))
       setQuotes(data);
    } 
    fetchData()
  },[])

  console.log("Data is:",quotes);

  return (

    <div className='quote-box'>
     <h4> {quotes.content}</h4>
    </div>

  )
}

export default Home