import { Banners } from "../data/MainSiteData"
import Link from "next/link"

const BannerData = Banners.banners[1]

export default function BannerSecondary (){
    return(
        <div className="flex w-full h-fit min-h-[50vh] bg-[#f4f2ed] items-center justify-center mt-10">
            <div className="flex w-[80%] h-fit min-h-[50vh] flex-wrap">
                <div className="flex flex-col min-w-[330px] flex-[0.5] p-10  h-[50vh]">
                    <h1 className="text-[2.5rem] font-bold mb-4">{BannerData.title}</h1>
                    <p className="text-[1.1rem] my-4 max-w-[400px]">{BannerData.caption}</p>
                    <Link href='/'>
                        <a className="bg-yellow-300 hover:bg-orange-400 rounded-full py-3 w-fit px-10 font-bold text-[1.1rem] my-4">
                        Get Started
                        </a>
                    </Link> 
                </div>
                <div className="flex flex-col flex-[0.25] px-4 h-full mx-2 my-10  ">
                    {BannerData.bannerLinks.map((data) => {
                        return(
                            <Link key={data.Name} href={data.link} passHref>
                                <a className="mb-2 text-[1.1rem]">{">"+data.Name}</a>
                            </Link>
                        )
                    })}
                </div>
                <div className="flex flex-[0.7]">
                    <div className="bg-center h-[80%] my-auto bg-cover bg-no-repeat mx-2 flex-[0.6]" style={{backgroundImage:BannerData.images[0]}}></div>
                    <div className="flex flex-col flex-[0.5] p-2">
                        <div className="bg-center w-full h-[50%] mb-2" style={{backgroundImage:BannerData.images[1]}}></div>
                        <div className="bg-center w-full h-[50%]" style={{backgroundImage:BannerData.images[2]}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}