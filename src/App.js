import { useEffect, useState } from 'react';
import './App.css';
import VidList from "./Components/VidList";

function App() {
  const [videos, setVideos] = useState([]);
  
  const fetchVideos = (()=>{
      // const url=`https://content.guardianapis.com/search?q=literature&format=json&api-key=test`

      const url=`https://api.harvardartmuseums.org/video?apikey=4dedb3eb-8113-484e-b274-49c586b02b24`

      fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        setVideos(data.records)
      })

  })

  useEffect(()=>{
    fetchVideos();
  }, [])

  return (
   <>hello
      <VidList videos={videos}/>
   </>
  );
}

export default App;
