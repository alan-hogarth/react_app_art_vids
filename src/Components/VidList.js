import App from "../App";
import VidPanel from "./VidPanel";

const VidList = (({ videos }) => {
    const vidNodes = videos.map((currentVid)=>{
        return(
        <VidPanel video={currentVid} key={currentVid.id}/>
        )
    });

    return (
        <>
        {vidNodes}
        </>
    )

});

export default VidList;