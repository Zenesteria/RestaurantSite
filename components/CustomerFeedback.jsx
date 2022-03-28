import { CustomerFeedbackData } from "../data/MainSiteData"
import {FaHeart} from "react-icons/fa"

const FeebackMessages = CustomerFeedbackData.feedback


export default function Feedback(){
    return(
        <div className="flex flex-col w-full h-fit min-h-[50vh] p-10">
            <h1 className="text-[3rem] font-bold flex items-center">
                {CustomerFeedbackData.title.split(" ")[0]}
                <FaHeart className="text-amber-800"/>
                {CustomerFeedbackData.title.split(" ")[1]}
            </h1>
            <hr className="border-black my-10" />
            <div className="flex w-[80%] mx-auto flex-wrap">
                {FeebackMessages.map((msg) => {
                    return(
                        <FeedbackMsg
                            key={msg.feedback_id}
                            msg={msg.feedback_msg}
                            customer={msg.feedback_author}
                            location={msg.feedback_loc}
                        />
                    )
                })}
            </div>
        </div>
    )
}


const FeedbackMsg = (props) => {
    return(
        <div className="flex w-fit h-fit min-w-[300px] flex-col">
            <p className="relative italic max-w-[350px] text-[1.1rem] p-5">
                <span className="text-amber-700 text-[3rem] absolute top-0 left-0 italic">{'"'}</span>
                {props.msg}
            </p>
            <p className="px-5 text-gray-400">{props.customer} - {props.location}</p>
        </div>
    )
}