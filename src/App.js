import { useEffect, useState } from 'react';
import './App.css';
import VidList from "./Components/VidList";
import VidFilter from "./Components/VidFilter";

function App() {
  const [videos, setVideos] = useState([]);
  const [vidFilter, setVidFilter] = useState([]);
  
  const fetchVideos = ()=> {

      const url=`https://api.harvardartmuseums.org/video?apikey=4dedb3eb-8113-484e-b274-49c586b02b24`

      fetch(url)
      .then((res)=>res.json())
      .then((data) => {
        setVideos(data.records);
        setVidFilter(data.records)  
      });
  };

  const handleUserFilter = (userInput) => {
    const someVids = videos.filter((currentVid) => {
      return currentVid.description.toUpperCase().includes(userInput.toUpperCase());
    });
    setVidFilter(someVids);
  }

  useEffect(()=>{
    fetchVideos();
  }, [])

  return (
   <>
      <h1>Harvard Museum Videos</h1>
      <div id="top-area">
      <VidFilter onUserInput={handleUserFilter}/>
      </div>
      <VidList videos={vidFilter}/>
      
   </>
  );
}

export default App;
