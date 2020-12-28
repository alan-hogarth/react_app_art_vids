import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  
  const fetchArticles = (()=>{
      const url=`https://content.guardianapis.com/search?q=literature&format=json&api-key=test`

      fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        setArticles(data.response)
      })

  })

  useEffect(()=>{
    fetchArticles();
  }, [])

  return (
   <>hello
 
   </>
  );
}

export default App;
