import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Banner />
      <div className="max-w-[920px] mx-auto py-10 px-2">
        <AboutMe />
        <Experience />
        <Skill />
      </div>
      <Footer />
    </>
  );
}

export default App;
