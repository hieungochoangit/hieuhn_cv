import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Banner />
      <div className="max-w-[800px] mx-auto py-10 px-2">
        <AboutMe />
        <Skill />
      </div>
      <Footer />
    </>
  );
}

export default App;
