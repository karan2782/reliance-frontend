import React from 'react'
import Cameras from "../component/Cameras";
import Computers from "../component/Computers";
import Headphones from "../component/Headphones";
import HomeAppliances from "../component/HomeAppliances";
import Kitchen from "../component/Kitchen";
import Mobiles from "../component/Mobiles";
import PersonalCare from "../component/PersonalCare";
import Televisions from "../component/Televisions";

function HomePage() {
  return (
    <>
      <Headphones />
      <Mobiles />
      <Televisions />
      <HomeAppliances />
      <Cameras />
      <Computers />
      <Kitchen />
      <PersonalCare />
    </>
  )
}

export default HomePage
