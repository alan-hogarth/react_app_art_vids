// create panel and embed videos using react player?
// use video description and url
import ReactPlayer from "react-player";

const VidPanel = (({ video })=>{


    return (   
        <div className="vid-overview">
            <h3>Title: {video.description}</h3>
            <ReactPlayer 
                url={video.primaryurl}
                controls="true"
                />
        </div>
    )
});

export default VidPanel;
