import { IconButton } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";


const PrevArrow = ({ onClick }) => (
    <IconButton
      aria-label="Previous"
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      zIndex="10"
      onClick={onClick}
       color="black"
      backgroundColor='rgba(245, 235, 235, 0.26)'
      borderRadius='none'
      height='100px'

      boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    > <IoIosArrowBack/> </IconButton>
  );
  
  const NextArrow = ({ onClick }) => (
    <IconButton
      aria-label="Next"
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      zIndex="10"
      
      onClick={onClick}
      color="black"
      height='100px'
      borderRadius='none'
      backgroundColor='rgba(245, 235, 235, 0.26)'
       boxShadow= 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      >
  <IoIosArrowForward />
      </IconButton>
  );



  
  function SliderEffect({children, slidesToScroll, slidesToShow, autoplay=false, dots=false}) {
    let settings = {
        dots,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll,
        autoplay,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              prevArrow:false,
        nextArrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              prevArrow:false,
              nextArrow:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow:false,
              nextArrow:false
            }
          }
        ]
      };
    return (
      <Slider {...settings}  >
        {children}
      </Slider>
    )
  }
  
  export default SliderEffect
  