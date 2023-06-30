import Banner from "./components/Banner/Banner"
import Features from "./components/Features/Features"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="px-16 mx-auto max-w-screen-2xl">
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
      </div>
    </div>

  )
}

export default App
