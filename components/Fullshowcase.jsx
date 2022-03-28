import {ShowcaseData} from "../data/MainSiteData"

export default function Showcase() {
    return(
        <div className="flex py-10 justify-center items-center w-full min-h-[80vh] h-fit relative text-white text-center">
            <div className="absolute z-[-1] w-full h-[80vh] top-0 right-0 bg-center bg-no-repeat bg-cover darken" style={{backgroundImage:ShowcaseData.bg}}></div>
            <div className="flex items-center py-5 flex-col w-fit h-full">
                <h1 className="text-[3rem]">{ShowcaseData.title}</h1>
                <p className="max-w-[400px] text-[1.2rem]">{ShowcaseData.caption}</p>

                <form className="flex flex-col w-full h-full text-black">
                    <RegInput Name="Promotional Code" val={ShowcaseData.RegForm.promoCode}/>
                    <RegInput Name="Promotional Code"/>
                    <RegInput Name="Promotional Code"/>
                    <RegInput Name="Promotional Code"/>
                    <RegInput Name="Promotional Code"/>
                    <RegInput Name="Promotional Code"/>
                    <button type="submit" className="bg-yellow-300 rounded-full w-full h-fit py-2 text-black text-[1.3rem] hover:bg-orange-400 transition-all duration-500">Place Order</button>
                </form>
            </div>
        </div>
    )
}

const RegInput = (props) => {
    return(
        <input className="bg-white w-full h-[13%] rounded-sm my-2 p-2" type="text" placeholder={props.Name}  value={props.val}/>
    )
}