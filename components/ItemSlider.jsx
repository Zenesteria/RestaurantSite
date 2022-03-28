import Slider from "react-slick";
import Link from "next/link";
import Products from "../data/Products";
import {FaArrowLeft, FaArrowRight,} from 'react-icons/fa'
import {BsFillLightningFill} from 'react-icons/bs'
import {slidercontentdata} from "../data/MainSiteData";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute right-[-20px] top-[50%] cursor-pointer rounded-full z-30" onClick={onClick}>
        <FaArrowRight className="text-[1.5rem] text-gray-600"/>
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="flex w-fit h-fit p-2 bg-white border-[0.5px] shadow-xl absolute left-[-20px] top-[50%] cursor-pointer rounded-full z-30" onClick={onClick}>
            <FaArrowLeft className="text-[1.5rem] text-gray-600 cursor-pointer"/>
        </div>
    );
}


export default function ItemSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
      <div className="flex flex-col items-center justify-center w-full my-10">
          <h1 className="text-[2.5rem]">{slidercontentdata.heading}</h1>
          <p className="text-[1.2rem]">
            {slidercontentdata.caption.split('$')[0]} 
            <strike>${slidercontentdata.caption.split('$')[1]}</strike>
            <strong className="text-green-700">${slidercontentdata.caption.split('$')[2].split(' ')[0]}</strong>
            {slidercontentdata.caption.split('$')[2].split('9')[2]}
          </p>

          {/* ITEM SLIDER */}
          <div className="w-[90%] mx-auto my-10">
            <Slider {...settings}>
                {Products.map((data) => {
                    return(
                        <div key={data.id}>
                            <Slide
                                image={data.productImage}
                                status={data.productStatus}
                                title={data.productTitle}
                                tags={data.productTags}
                                quantity={data.productQuantity}
                            />
                        </div>
                    )
                })}
            </Slider>
          </div>

          <Link href='/'>
                <a className="bg-yellow-300 hover:bg-orange-400 rounded-full py-3 px-9 font-bold text-[1.1rem]">
                  Order Now
                </a>
          </Link>        
      </div>
  );
}

const Slide = (props) => {
    return(
        <div className="flex flex-col w-[90%] min-h-[45vh] h-fit mx-auto">
            <div className="flex w-full h-[25vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage:props.image}}>

            </div>
            <div className="flex flex-col w-full h-[40%] bg-white p-2">
                <p className="flex text-[1rem] items-center mb-2"><BsFillLightningFill className="text-red-600"/>{props.status}</p>
                <h1 className="text-[1.25rem] mb-2">{props.title}</h1>
                <p className="text-gray-400">{props.tags}</p>
                <p>{props.quantity}</p>
            </div>
        </div>
    )
}