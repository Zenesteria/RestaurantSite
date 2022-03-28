import {FeaturedShowcaseData} from "../data/MainSiteData"
import {FaCheck} from "react-icons/fa"
const FeaturedShowcaseItemData = FeaturedShowcaseData.Showcases

export default function FeaturedShowcase(){
    return(
        <div className="flex flex-col my-4 w-full h-fit min-h-[60vh] justify-center items-center py-4">
            <h1 className="text-[2.5rem] font-bold mb-5">{FeaturedShowcaseData.title}</h1>
            <p className="text-[1.3rem] max-w-[900px] text-center mb-10">{FeaturedShowcaseData.caption}</p>
            <div className="flex w-[70%] min-h-[65vh] flex-wrap min-w-[300px]">
                {FeaturedShowcaseItemData.map((data) => {
                    return(
                        <FeaturedItem
                            key={data.showcaseId}
                            bg={data.bg}
                            title={data.showcaseTitle}
                            captions={data.showcasecaptions}
                        />
                    )
                })}
            </div>
        </div>
    )
}


const FeaturedItem = (props) => {
    return(
        <div className="flex flex-1 mx-4 min-w-[330px] flex-col min-h-[60vh] h-fit bg-[#f4f2ed]">
            <div className="w-full h-[40vh] min-h-[250px] relative bg-center bg-no-repeat bg-cover" style={{backgroundImage: props.bg}}></div>
            <div className="flex flex-col p-10 h-fit min-h-[330px]">
                <h1 className="text-[2rem] mb-2 font-semibold">{props.title}</h1>
                {props.captions.map((captionData) => {
                    return(
                        <p key={props.key} className="flex mb-2 text-[1.2rem] max-w-[350px] items-center"><FaCheck className="mr-2 min-w-[30px] text-amber-800 opacity-25"/>{captionData}</p>
                    )
                })}
            </div>
        </div>
    )
}