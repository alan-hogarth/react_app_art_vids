import App from "../App";

const VidList = (({ videos }) => {
    const vidNodes = videos.map((currentVid)=>{
        return(
        <p><a href="{currentVid.primaryurl}"> {currentVid.description}</a></p>
        )
    });

    return (
        <>
        {vidNodes}
        </>
    )

});

export default VidList;