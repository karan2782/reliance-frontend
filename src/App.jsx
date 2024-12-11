import Banner from "./component/Banner";
import Cameras from "./component/Cameras";
import Computers from "./component/Computers";
import Headphones from "./component/Headphones";
import HomeAppliances from "./component/HomeAppliances";
import Kitchen from "./component/Kitchen";
import Mobiles from "./component/Mobiles";
import PersonalCare from "./component/PersonalCare";
import Televisions from "./component/Televisions";
import FooterPage from "./pages/FooterPage";
import NavPage from "./pages/NavPage";

function App() {
  return (
    <>
      <NavPage />
      <Banner />
      <Headphones />
      <Mobiles />
      <Televisions />
      <HomeAppliances />
      <Cameras />
      <Computers />
      <Kitchen />
      <PersonalCare />
      <FooterPage />
    </>
  );
}

export default App;
