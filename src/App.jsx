import Banner from "./components/Banner/Banner"
import Features from "./components/Features/Features"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/projects"
import Resume from "./components/Resume/Resume"


function App() {

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="px-16 mx-auto max-w-screen-2xl">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
        <Projects></Projects>
        <Resume></Resume>
      </div>
    </div>

  )
}

export default App
