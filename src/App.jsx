import IntroVideo from "./Components/introVideo.jsx";
import Section from "./Components/Section.jsx";
import Footer from "./Components/Footer.jsx";
import Misc from "./Components/Misc.jsx";

import "./Styles/App.scss";
import "./Styles/intro.scss";
import "./Styles/section.scss";
import "./Styles/footer.scss";
import "./Styles/mediaQuery.scss";
import "./Styles/misc.scss";

import FreshTopicImg from "./Assets/academy.png";
import FreshTopicImg2 from "./Assets/story.png";
import tedTalksImg from "./Assets/in-the-news.gif";
import franchiseImg from "./Assets/franchise.gif";
import mapImg from "./Assets/locations.png";
import coursesImg from "./Assets/image2.png";
import albumImg from "./Assets/mba-cares.gif";
import baratImg from "./Assets/image1.png";
import chaiwalaImg from "./Assets/image3.png";

import data from "./data/data.json";

// $yellow: #fff100;
// $pink: #ed1e79;
// $red: #d20120;
// $white: #fff;
// $brown: #6d3d0f;

const yellow = " #fff100",
  pink = "#ed1e79",
  red = "#d20120",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  return (
    <>
      <IntroVideo />
      {/*  freshtopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={FreshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/*  freshtopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={FreshTopicImg2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/*  franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/*   map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />

      {/*  courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize={"20%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/*  album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/*  barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/*  chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer />
      <Misc />
    </>
  );
}

export default App;
