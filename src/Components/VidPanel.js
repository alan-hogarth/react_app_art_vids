// create panel and embed videos using react player?
// use video description and url
import ReactPlayer from "react-player";

const VidPanel = (({video})=>{


    return (
    
        <div>
            <h3>{video.description}</h3>
            <ReactPlayer 
                url={video.primaryurl}
                controls="true"
                />
        </div>
      
    )
});

export default VidPanel;
