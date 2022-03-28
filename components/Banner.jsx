import {Banners} from "../data/MainSiteData"
import Link from "next/link"

const BannerData = Banners.banners[0]
const BannerImages = BannerData.images

export default function Banner (){
    return(
        <div className="flex w-full h-[55vh] bg-amber-50 justify-center items-center my-10 flex-wrap">
            <div className="flex w-[70%] h-full">
                <BannerElement bg={BannerImages[0]}/>
                <BannerElement bg={BannerImages[1]}/>
                <div className="ml-4 flex flex-col items-center justify-center text-center flex-1 min-w-[300px]">
                    <h1 className="font-bold text-[2.5rem]">{BannerData.title}</h1>
                    <p className="font-light text-[1.1rem] my-4 max-w-[250px]">{BannerData.caption}</p>
                    <Link href='/'>
                        <a className="bg-yellow-300 hover:bg-orange-400 rounded-full py-3 px-9 font-bold text-[1.1rem]">
                            Claim Gift
                        </a>
                    </Link> 
                </div>
                <BannerElement bg={BannerImages[2]}/>
                <BannerElement bg={BannerImages[3]}/>
            </div>
        </div>
    )
}



const BannerElement = (props) => {
    return(
        <div className="flex ml-4 flex-[0.5] h-full bg-cover bg-center bg-no-repeat min-w-[150px]" style={{backgroundImage: props.bg}}></div>
    )
}