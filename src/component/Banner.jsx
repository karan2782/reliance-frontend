import { Box,  Image} from "@chakra-ui/react";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderEffect from "./SliderEffect";
import "./Banner.css"


const bannerArr = [
  {
    image:"https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
  },
  {
    image:"https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
  },
  {
    image:"https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
  },
  
  {
    image:"https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
  },
  {
    image:"https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
  },
  {
    image:"https://www.reliancedigital.in/medias/CLP1-Bigger-TV-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ5NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2gwOC8xMDIyOTQ0OTI2MTA4Ni5qcGd8MzkwZDFkOTEyZDVmNWMxMGMwNjQxZWVhZjE4YTZkYWQ5ZmM1ZmRlODg3NzlmZjljNTMzOTQ3ZTQzMjY3OTQwNQ",
  },
];



function Banner() {
  
  return (
    <Box mt={{lg:'0', md:'11'}}>
      <SliderEffect slidesToShow={1} slidesToScroll={1} autoplay={true} dots={true} >
        {bannerArr.map((ele, ind) => (
          <Box key={ind} >
            <Image 
              src={ele.image}
              alt="image"
            />
          </Box>
        ))}
      </SliderEffect>
    </Box>
  );
}

export default Banner;
